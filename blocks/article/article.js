export default async function decorate(block) {
  const [titleEl, searchEl, goButtonEl] = block.children;
  const title = titleEl.textContent.trim();
  const searchPlaceholder = searchEl.textContent.trim();
  const goButtonText = goButtonEl.textContent.trim();

  block.innerHTML = `
    <h2>${title}</h2>
    <div class="content-wrapper">
      <div class="main-content">
        <div class="search-container">
          <input type="text" class="search-field" placeholder="${searchPlaceholder}">
          <button class="search-button">${goButtonText}</button>
        </div>
        <h3 class="year-title">2024</h3>
        <div class="article-list-container"></div>
        <div class="no-results-message" style="display: none;">Sorry! No results found matching your search. Please try again with a different set of keywords.</div>
        <button class="load-more-button">Load More</button>
        <div class="article-description-container" style="display: none;">
          <div class="article-date"></div>
          <div class="article-title"></div>
          <div class="article-description"></div>
          <div class="article-pdf">Download PDF</div>
          <button class="back-to-list-button">Back to List</button>
        </div>
      </div>
      <div class="sidebar">
        <h3>By Year</h3>
        <div class="year-filter-container"></div>
      </div>
    </div>
  `;

  const articleListContainer = block.querySelector(".article-list-container");
  const yearFilterContainer = block.querySelector(".year-filter-container");
  const searchField = block.querySelector(".search-field");
  const searchButton = block.querySelector(".search-button");
  const loadMoreButton = block.querySelector(".load-more-button");
  const yearTitle = block.querySelector(".year-title");
  const articleDescriptionContainer = block.querySelector(
    ".article-description-container"
  );
  const articleDate = block.querySelector(".article-date");
  const articleTitle = block.querySelector(".article-title");
  const articleDescription = block.querySelector(".article-description");
  const articlePdf = block.querySelector(".article-pdf");
  const backToListButton = block.querySelector(".back-to-list-button");

  let originalArticles = [];
  let articles = [];
  let selectedYear = 2024;
  let selectedMonth = null;
  let displayedArticles = 0;
  const articlesPerLoad = 2;

  // Fetching articles from the API
  try {
    const response = await fetch(
      "/graphql/execute.json/my-website/Articles-list"
    );
    const data = await response.json();
    originalArticles = data.data.articleModelList.items
      .filter((item) => item.title && item.date) // Ensure title and date are not null
      .map((item) => ({
        date: item.date,
        title: item.title,
        description: item.description?.plaintext || "",
        pdf: item.pdf?._path || "",
        path: item._path,
      }));
    articles = [...originalArticles]; // Set articles to the full list initially
  } catch (error) {
    console.error("Error fetching articles:", error);
  }

  function renderArticles() {
    let filteredArticles = articles.filter(
      (article) => new Date(article.date).getFullYear() === selectedYear
    );

    if (selectedMonth !== null) {
      filteredArticles = filteredArticles.filter(
        (article) => new Date(article.date).getMonth() === selectedMonth
      );
    }

    const articlesToShow = filteredArticles.slice(
      0,
      displayedArticles + articlesPerLoad
    );

    if (articlesToShow.length === 0) {
      articleListContainer.innerHTML = "";
      document.querySelector(".no-results-message").style.display = "block";
      loadMoreButton.style.display = "none";
    } else {
      articleListContainer.innerHTML = articlesToShow
        .map(
          (article) => `
            <div class="article-item">
              <div class="article-date">${formatDate(article.date)}</div>
              <a href="${article.path}" data-title="${encodeURIComponent(
            article.title
          )}" data-description="${encodeURIComponent(
            article.description
          )}" data-date="${encodeURIComponent(
            article.date
          )}" data-pdf="${encodeURIComponent(
            article.pdf
          )}" class="article-title">${article.title}</a>
            </div>
          `
        )
        .join("");

      document.querySelector(".no-results-message").style.display = "none";
      displayedArticles = articlesToShow.length;
      loadMoreButton.style.display =
        displayedArticles < filteredArticles.length ? "block" : "none";
    }
  }

  function handleSearch() {
    const searchTerm = searchField.value.toLowerCase();
    articles = originalArticles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm)
    );
    displayedArticles = 0;
    renderArticles();
  }

  function handleLoadMore() {
    displayedArticles += articlesPerLoad;
    renderArticles();
  }

  function handleArticleClick(e) {
    e.preventDefault();
    const articleLink = e.target.closest(".article-title");
    if (articleLink) {
      const date = decodeURIComponent(articleLink.dataset.date);
      const title = decodeURIComponent(articleLink.dataset.title);
      const description = decodeURIComponent(articleLink.dataset.description);
      const pdf = decodeURIComponent(articleLink.dataset.pdf);
      articleDate.innerHTML = date;
      articleTitle.innerHTML = title;
      articleDescription.innerHTML = description;
      if (pdf) {
        articlePdf.innerHTML = `<a href="${pdf}" target="_blank">Download PDF</a>`;
      } else {
        articlePdf.innerHTML = "";
      }
      articleDescriptionContainer.style.display = "block";
      articleListContainer.style.display = "none";
    }
  }

  function handleBackToList() {
    articleDescriptionContainer.style.display = "none";
    articleListContainer.style.display = "block";
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${monthNames[date.getMonth()]} ${date.getDate()}`;
  }

  // Initial render
  renderYearFilter();
  renderArticles();

  // Event listeners
  searchButton.addEventListener("click", handleSearch);
  loadMoreButton.addEventListener("click", handleLoadMore);
  articleListContainer.addEventListener("click", handleArticleClick);
  backToListButton.addEventListener("click", handleBackToList);
}
