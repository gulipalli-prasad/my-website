export default function decorate(block) {
  const [
    titleEl,
    placeholderTextEl,
    goButtonTextEl,
    loadmoreButtonTextEl,
    byyearTextEl,
  ] = block.children;

  const title = titleEl?.textContent?.trim() || "";
  const placeholderText = placeholderTextEl?.textContent?.trim() || "";
  const goButtonText = goButtonTextEl?.textContent?.trim() || "";
  const loadmoreButtonText = loadmoreButtonTextEl?.textContent?.trim() || "";
  const byyearText = byyearTextEl?.textContent?.trim() || "";

  // Mock data
  const mockArticles = [
    {
      date: "2024-08-13",
      title:
        "Maruti Suzuki commences export of its award-winning SUV Fronx to Japan, a tribute to 'Make in India' initiative",
    },
    {
      date: "2024-08-04",
      title: "Together: Progressing through shared value creation",
    },
    {
      date: "2024-08-01",
      title: "Maruti Suzuki production volume: July 2024",
    },
    {
      date: "2024-08-01",
      title: "Maruti Suzuki sales in July 2024",
    },
    {
      date: "2024-07-31",
      title:
        "Maruti Suzuki Financial Results: Quarter 1 (April-June), FY 2024-25",
    },
    {
      date: "2024-07-29",
      title:
        "Maruti Suzuki Grand Vitara continues to 'RULE EVERY ROAD': Clocks fastest 2 lakh unit sales in the mid-SUV space since launch",
    },
    {
      date: "2023-12-15",
      title: "Sample article from 2023",
    },
    {
      date: "2022-06-01",
      title: "Sample article from 2022",
    },
  ];

  // Create HTML structure
  block.innerHTML = `
      <h1>${title}</h1>
      <div class="content-wrapper">
          <div class="main-content">
              <div class="search-container">
                  <input type="text" class="search-field" placeholder="${placeholderText}">
                  <button class="search-button">${goButtonText}</button>
              </div>
              <div class="year-heading">2024</div>
              <div class="article-list-container"></div>
              <button class="load-more-button">${loadmoreButtonText}</button>
          </div>
          <div class="sidebar">
              <h3>${byyearText}</h3>
              <div class="year-filter-container"></div>
          </div>
      </div>
  `;

  const articleListContainer = block.querySelector(".article-list-container");
  const yearFilterContainer = block.querySelector(".year-filter-container");
  const searchField = block.querySelector(".search-field");
  const searchButton = block.querySelector(".search-button");
  const loadMoreButton = block.querySelector(".load-more-button");
  const yearHeading = block.querySelector(".year-heading");

  let filteredArticles = mockArticles;
  let currentPage = 1;
  const ARTICLES_PER_PAGE = 5;

  function renderArticles() {
    const start = (currentPage - 1) * ARTICLES_PER_PAGE;
    const end = start + ARTICLES_PER_PAGE;
    const articlesToRender = filteredArticles.slice(start, end);

    articleListContainer.innerHTML = articlesToRender
      .map(
        (article) => `
          <div class="article-item">
              <span class="article-date">${formatDate(article.date)}</span>
              <span class="article-title">${article.title}</span>
          </div>
      `
      )
      .join("");

    loadMoreButton.style.display =
      end < filteredArticles.length ? "block" : "none";
  }

  function renderYearFilter() {
    const years = [
      ...new Set(
        mockArticles.map((article) => new Date(article.date).getFullYear())
      ),
    ].sort((a, b) => b - a);
    yearFilterContainer.innerHTML = years
      .map(
        (year) => `
          <div>
              <button class="year-button" data-year="${year}">${year}</button>
              <div class="month-container" id="months-${year}"></div>
          </div>
      `
      )
      .join("");

    yearFilterContainer.addEventListener("click", handleYearFilter);
  }

  function handleYearFilter(event) {
    if (event.target.classList.contains("year-button")) {
      const year = parseInt(event.target.dataset.year);
      const monthContainer = document.getElementById(`months-${year}`);

      if (
        monthContainer.style.display === "none" ||
        monthContainer.style.display === ""
      ) {
        monthContainer.style.display = "block";
        const months = getMonthsForYear(year);
        monthContainer.innerHTML = months
          .map(
            (month) => `
                  <button class="month-button" data-year="${year}" data-month="${month}">${month}</button>
              `
          )
          .join("");
      } else {
        monthContainer.style.display = "none";
      }
    } else if (event.target.classList.contains("month-button")) {
      const year = parseInt(event.target.dataset.year);
      const month = event.target.dataset.month;
      filteredArticles = mockArticles.filter((article) => {
        const articleDate = new Date(article.date);
        return (
          articleDate.getFullYear() === year &&
          articleDate.toLocaleString("default", { month: "long" }) === month
        );
      });
      currentPage = 1;
      yearHeading.textContent = `${month} ${year}`;
      renderArticles();
    }
  }

  function getMonthsForYear(year) {
    const months = new Set();
    mockArticles.forEach((article) => {
      const articleDate = new Date(article.date);
      if (articleDate.getFullYear() === year) {
        months.add(articleDate.toLocaleString("default", { month: "long" }));
      }
    });
    return Array.from(months);
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "2-digit" });
  }

  function handleSearch() {
    const searchTerm = searchField.value.toLowerCase();
    filteredArticles = mockArticles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm)
    );
    currentPage = 1;
    yearHeading.textContent = searchTerm ? "Search Results" : "2024";
    renderArticles();
  }

  function handleLoadMore() {
    currentPage++;
    renderArticles();
  }

  // Initial render
  renderArticles();
  renderYearFilter();

  // Event listeners
  searchButton.addEventListener("click", handleSearch);
  loadMoreButton.addEventListener("click", handleLoadMore);
}
