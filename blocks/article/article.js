export default function decorate(block) {
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

  let articles; // Replace with actual data fetching
  let selectedYear = 2024;
  let selectedMonth = null;
  let displayedArticles = 0;
  const articlesPerLoad = 2;
  let filteredArticles;
  let currentPage = 1;
  const ARTICLES_PER_PAGE = 5;

  // function renderArticles() {
  //   let filteredArticles = articles.filter(
  //     (article) => new Date(article.date).getFullYear() === selectedYear
  //   );

  //   if (selectedMonth !== null) {
  //     filteredArticles = filteredArticles.filter(
  //       (article) => new Date(article.date).getMonth() === selectedMonth
  //     );
  //   }

  //   const articlesToShow = filteredArticles.slice(
  //     0,
  //     displayedArticles + articlesPerLoad
  //   );

  //   articleListContainer.innerHTML = articlesToShow
  //     .map(
  //       (article) => `
  //         <div class="article-item">
  //           <div class="article-date">${formatDate(article.date)}</div>
  //           <a href="#" class="article-title">${article.title}</a>
  //         </div>
  //       `
  //     )
  //     .join("");

  //   displayedArticles = articlesToShow.length;

  //   loadMoreButton.style.display =
  //     displayedArticles < filteredArticles.length ? "block" : "none";
  // }

  async function fetchArticles() {
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
        <a href="${article._path}.html" class="article-title">${article.title}</a>

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

    // renderArticles();
    fetchArticles();
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
              <a href="#" class="article-title">${article.title}</a>
            </div>
          `
        )
        .join("");

      monthArticles.style.display = "block";
    } else {
      monthArticles.style.display = "none";
    }

    // renderArticles();
    fetchArticles();
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

  async function handleSearch() {
    const searchTerm = searchField.value.toLowerCase();
    const response = await fetch(
      "/graphql/execute.json/my-website/Articles-list"
    );
    const data = await response.json();
    const articles = data.data.articleModelList.items;

    const filteredArticles = articles.filter(
      (article) =>
        article.title && article.title.toLowerCase().includes(searchTerm)
    );
    filteredArticles = filteredArticles;
    // articles = mockArticles.filter((article) =>
    //   article.title.toLowerCase().includes(searchTerm)
    // );
    renderYearFilter();
    displayedArticles = 0;
    fetchArticles();
    // renderArticles();
  }

  function handleLoadMore() {
    displayedArticles += articlesPerLoad;
    // renderArticles();
    fetchArticles();
  }

  // Initial render
  renderYearFilter();
  fetchArticles();
  // renderArticles();

  // Event listeners
  searchButton.addEventListener("click", handleSearch);
  loadMoreButton.addEventListener("click", handleLoadMore);
}

// Mock data (replace with actual data fetching)
// const mockArticles = [
//   {
//     date: "2024-08-13",
//     title:
//       "Maruti Suzuki commences export of its award-winning SUV Fronx to Japan, a tribute to 'Make in India' initiative",
//   },

//   {
//     date: "2024-08-04",
//     title: "Together: Progressing through shared value creation",
//   },

//   { date: "2024-08-01", title: "Maruti Suzuki production volume: July 2024" },

//   { date: "2024-08-01", title: "Maruti Suzuki sales in July 2024" },

//   {
//     date: "2024-07-31",
//     title:
//       "Maruti Suzuki Financial Results: Quarter 1 (April-June), FY 2024-25",
//   },

//   {
//     date: "2024-07-29",
//     title:
//       "Maruti Suzuki Grand Vitara continues to 'RULE EVERY ROAD': Clocks fastest 2 lakh unit sales in the mid-SUV space since launch",
//   },

//   { date: "2023-12-15", title: "Sample article from 2023" },

//   { date: "2022-06-01", title: "Sample article from 2022" },
//   { date: "2022-07-10", title: "Sample article from JUNE 2022" },
// ];
