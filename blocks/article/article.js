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
        <button class="load-more-button">Load More</button>
        <div class="article-description-container" style="display: none;">
          <div class="article-description"></div>
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
  const articleDescription = block.querySelector(".article-description");
  const backToListButton = block.querySelector(".back-to-list-button");

  let articles = [];
  try {
    const response = await fetch(
      "/graphql/execute.json/my-website/Articles-list"
    );
    const data = await response.json();
    articles = data.data.articleModelList.items
      .filter((item) => item.title && item.date)
      .map((item) => ({
        date: item.date,
        title: item.title,
        description: item.description?.plaintext || "",
        pdf: item.pdf?._path || "",
        path: item._path,
      }));
  } catch (error) {
    console.error("Error fetching articles:", error);
  }

  let selectedYear = 2024;
  let selectedMonth = null;
  let displayedArticles = 0;
  const articlesPerLoad = 2;

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

    articleListContainer.innerHTML = articlesToShow
      .map(
        (article) => `
          <div class="article-item">
            <div class="article-date">${formatDate(article.date)}</div>
            <a href="/content/my-website/index/article-content.html?title=${encodeURIComponent(
              article.title
            )}" class="article-title">${article.title}</a>
          </div>
        `
      )
      .join("");

    displayedArticles = articlesToShow.length;

    loadMoreButton.style.display =
      displayedArticles < filteredArticles.length ? "block" : "none";
  }

  function renderYearFilter() {
    const years = [
      ...new Set(
        articles.map((article) => new Date(article.date).getFullYear())
      ),
    ].sort((a, b) => b - a);

    yearFilterContainer.innerHTML = years
      .map(
        (year) => `
          <div class="year-item" data-year="${year}">
            <button class="year-button">${year}</button>
            <div class="month-list" style="display: none;"></div>
          </div>
        `
      )
      .join("");

    yearFilterContainer.querySelectorAll(".year-button").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const yearItem = e.target.closest(".year-item");
        const year = parseInt(yearItem.dataset.year);
        toggleYear(year);
      });
    });
  }

  function toggleYear(year) {
    selectedYear = year;
    selectedMonth = null;
    displayedArticles = 0;
    yearTitle.textContent = year;

    const yearItems = yearFilterContainer.querySelectorAll(".year-item");

    yearItems.forEach((item) => {
      const isClickedYear = parseInt(item.dataset.year) === year;
      const monthList = item.querySelector(".month-list");

      if (isClickedYear) {
        monthList.style.display = "block";
        renderMonths(monthList, year);
      } else {
        monthList.style.display = "none";
        monthList.innerHTML = "";
      }
    });

    renderArticles();
  }

  function renderMonths(monthListElement, year) {
    const yearArticles = articles.filter(
      (article) => new Date(article.date).getFullYear() === year
    );

    const months = [
      ...new Set(
        yearArticles.map((article) => new Date(article.date).getMonth())
      ),
    ].sort((a, b) => a - b);

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    monthListElement.innerHTML = months
      .map(
        (month) => `
          <div class="month-item">
            <button class="month-button" data-month="${month}">${monthNames[month]}</button>
            <div class="month-articles" style="display: none;"></div>
          </div>
        `
      )
      .join("");

    monthListElement.querySelectorAll(".month-button").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const month = parseInt(btn.dataset.month);
        toggleMonth(month, btn);
      });
    });
  }

  function toggleMonth(month, btn) {
    selectedMonth = month;
    displayedArticles = 0;

    const monthArticles = btn.nextElementSibling;
    const isExpanded = monthArticles.style.display !== "none";

    if (!isExpanded) {
      const filteredArticles = articles.filter(
        (article) =>
          new Date(article.date).getFullYear() === selectedYear &&
          new Date(article.date).getMonth() === month
      );

      monthArticles.innerHTML = filteredArticles
        .map(
          (article) => `
            <div class="article-item">
            <a href="/content/my-website/index/article-content.html?title=${encodeURIComponent(
              article.title
            )}" class="article-title">${article.title}</a>
            </div>
          `
        )
        .join("");

      monthArticles.style.display = "block";
    } else {
      monthArticles.style.display = "none";
    }

    renderArticles();
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

  function handleSearch() {
    const searchTerm = searchField.value.toLowerCase();
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm)
    );
    articles = filteredArticles;
    renderYearFilter();
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
      const path = articleLink.dataset._path;
      const description = decodeURIComponent(articleLink.dataset.description);
      articleDescription.innerHTML = description;
      articleDescriptionContainer.style.display = "block";
      articleListContainer.style.display = "none";
    }
  }

  function handleBackToList() {
    articleDescriptionContainer.style.display = "none";
    articleListContainer.style.display = "block";
  }

  function handleHashChange() {
    const hash = window.location.hash;
    if (hash.startsWith("#article-content")) {
      const urlParams = new URLSearchParams(hash.substring(1));
      const title = urlParams.get("title");

      if (title) {
        const article = articles.find(
          (article) => article.title === decodeURIComponent(title)
        );
        if (article) {
          articleDescription.innerHTML = article.description;
          articleDescriptionContainer.style.display = "block";
          articleListContainer.style.display = "none";
          yearFilterContainer.style.display = "none";
        } else {
          articleDescription.innerHTML = "Article Not Found";
        }
      }
    }
  }

  // Initial render
  renderYearFilter();
  renderArticles();

  // Event listeners
  searchButton.addEventListener("click", handleSearch);
  loadMoreButton.addEventListener("click", handleLoadMore);
  articleListContainer.addEventListener("click", handleArticleClick);
  backToListButton.addEventListener("click", handleBackToList);
  window.addEventListener("hashchange", handleHashChange);
  handleHashChange(); // Check hash on page load
}
