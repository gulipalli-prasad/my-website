export default function decorate(block) {
  const [titleEl, searchEl, goButtonEl, loadMoreEl] = block.children;

  const title = titleEl.textContent.trim();
  const searchPlaceholder = searchEl.textContent.trim();
  const goButtonText = goButtonEl.textContent.trim();
  const loadMoreText = loadMoreEl.textContent.trim();

  // Create HTML structure
  block.innerHTML = `
    <h2>${title}</h2>
    <div class="content-wrapper">
      <div class="main-content">
        <div class="search-container">
          <input type="text" class="search-field" placeholder="${searchPlaceholder}">
          <button class="search-button">${goButtonText}</button>
        </div>
        <div class="year-display"></div>
        <div class="article-list-container"></div>
        <button class="load-more-button">${loadMoreText}</button>
      </div>
      <div class="sidebar">
        <h3>By Year</h3>
        <div class="year-filter-container"></div>
      </div>
    </div>
  `;

  const articleListContainer = block.querySelector(".article-list-container");
  const yearFilterContainer = block.querySelector(".year-filter-container");
  const yearDisplay = block.querySelector(".year-display");
  const searchField = block.querySelector(".search-field");
  const searchButton = block.querySelector(".search-button");
  const loadMoreButton = block.querySelector(".load-more-button");

  let articles = [];
  let filteredArticles = [];
  let currentPage = 1;
  let selectedYear = new Date().getFullYear();
  let selectedMonth = null;
  const ARTICLES_PER_PAGE = 5;

  async function fetchArticles() {
    // Replace this with your actual API endpoint
    const response = await fetch(
      "/graphql/execute.json/my-website/Articles-list"
    );
    const data = await response.json();
    const articles = data.data.articleModelList.items;
    // articles = data.articleModelList;
    filteredArticles = articles;
    renderArticles();
    renderYearFilter();
  }

  function renderArticles() {
    const start = (currentPage - 1) * ARTICLES_PER_PAGE;
    const end = start + ARTICLES_PER_PAGE;
    const articlesToRender = filteredArticles.slice(start, end);

    articleListContainer.innerHTML = articlesToRender
      .map(
        (article) => `
      <div class="article-item">
        <span class="article-date">${article.date}</span>
        <a href="${article._path} @context='html' " class="article-title">${article.title}</a>

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
        articles.map((article) => new Date(article.date).getFullYear())
      ),
    ].sort((a, b) => b - a);
    yearFilterContainer.innerHTML = years
      .map(
        (year) => `
      <button class="year-button ${
        year === selectedYear ? "active" : ""
      }" data-year="${year}">${year}</button>
    `
      )
      .join("");

    yearFilterContainer.addEventListener("click", handleYearFilter);
    updateYearDisplay();
  }

  function handleYearFilter(event) {
    if (event.target.classList.contains("year-button")) {
      selectedYear = parseInt(event.target.dataset.year);
      selectedMonth = null;
      yearFilterContainer
        .querySelectorAll(".year-button")
        .forEach((btn) => btn.classList.remove("active"));
      event.target.classList.add("active");
      renderMonths();
      filterArticles();
      updateYearDisplay();
    } else if (event.target.classList.contains("month-button")) {
      selectedMonth = parseInt(event.target.dataset.month);
      yearFilterContainer
        .querySelectorAll(".month-button")
        .forEach((btn) => btn.classList.remove("active"));
      event.target.classList.add("active");
      filterArticles();
    }
  }

  function updateYearDisplay() {
    yearDisplay.textContent = selectedYear;
  }

  function renderMonths() {
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

    const yearButton = yearFilterContainer.querySelector(
      `.year-button[data-year="${selectedYear}"]`
    );

    // **Check if the selected year is already open**
    if (
      yearButton.nextElementSibling &&
      yearButton.nextElementSibling.classList.contains("month-list")
    ) {
      yearButton.nextElementSibling.remove(); // **Close the current year if it's already open**
      return;
    }

    // **Close any previously opened year**
    const previousMonthList = yearFilterContainer.querySelector(".month-list");
    if (previousMonthList) {
      previousMonthList.remove();
    }

    const monthList = document.createElement("div");
    monthList.className = "month-list";

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const months =
      selectedYear === currentYear
        ? monthNames.slice(0, currentMonth + 1).reverse()
        : monthNames.slice().reverse();

    monthList.innerHTML = months
      .map(
        (month, index) => `
        <button class="month-button" data-month="${
          11 - index
        }">${month}</button>
    `
      )
      .join("");

    yearButton.insertAdjacentElement("afterend", monthList);
  }

  function filterArticles() {
    filteredArticles = articles.filter((article) => {
      const articleDate = new Date(article.date);
      return (
        articleDate.getFullYear() === selectedYear &&
        (selectedMonth === null || articleDate.getMonth() === selectedMonth)
      );
    });
    currentPage = 1;
    renderArticles();
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "2-digit" });
  }

  function handleSearch() {
    const searchTerm = searchField.value.toLowerCase();
    filteredArticles = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchTerm) &&
        new Date(article.date).getFullYear() === selectedYear &&
        (selectedMonth === null ||
          new Date(article.date).getMonth() === selectedMonth)
    );
    currentPage = 1;
    renderArticles();
  }

  function handleLoadMore() {
    currentPage++;
    renderArticles();
  }

  // Initial render
  renderYearFilter();
  fetchArticles();

  // Event listeners
  searchButton.addEventListener("click", handleSearch);
  loadMoreButton.addEventListener("click", handleLoadMore);
  articleListContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("article-title")) {
      event.preventDefault();
      // Implement redirection logic here
      console.log("Redirect to article:", event.target.textContent);
    }
  });
}
