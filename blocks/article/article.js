export default function decorate(block) {
  const searchContainer = document.createElement("div");

  searchContainer.classList.add("search-container");

  const searchField = document.createElement("input");

  searchField.type = "text";

  searchField.placeholder = "Search your keyword";

  searchField.classList.add("search-field");

  const searchButton = document.createElement("button");

  searchButton.textContent = "Go";

  searchButton.classList.add("search-button");

  searchContainer.appendChild(searchField);

  searchContainer.appendChild(searchButton);

  const articleListContainer = document.createElement("div");

  articleListContainer.classList.add("article-list-container");

  const loadMoreButton = document.createElement("button");

  loadMoreButton.textContent = "Load More";

  loadMoreButton.classList.add("load-more-button");

  block.appendChild(searchContainer);

  block.appendChild(articleListContainer);

  block.appendChild(loadMoreButton);

  // Function to render articles

  function renderArticles(articles) {
    articleListContainer.innerHTML = "";

    let groupedArticles = {};

    articles.forEach((article) => {
      const year = new Date(article.date).getFullYear();

      if (!groupedArticles[year]) {
        groupedArticles[year] = [];
      }

      groupedArticles[year].push(article);
    });

    for (const year in groupedArticles) {
      const yearGroup = document.createElement("div");

      yearGroup.classList.add("year-group");

      const yearTitle = document.createElement("h3");

      yearTitle.textContent = year;

      yearGroup.appendChild(yearTitle);

      groupedArticles[year].forEach((article) => {
        const articleItem = document.createElement("div");

        articleItem.classList.add("article-item");

        articleItem.innerHTML = `

          <div class="article-date">${formatDate(article.date)}</div>

          <div class="article-title">${article.title}</div>

        `;

        yearGroup.appendChild(articleItem);
      });

      articleListContainer.appendChild(yearGroup);
    }
  }

  // Function to handle search

  searchButton.addEventListener("click", () => {
    const searchTerm = searchField.value.toLowerCase();

    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm)
    );

    renderArticles(filteredArticles);
  });

  // Mock data for articles, replace with actual data retrieval

  const articles = [
    {
      date: "2024-08-13",
      title:
        "Maruti Suzuki commences export of its award-winning SUV Fronx to Japan, a tribute to “Make in India” initiative",
    },

    {
      date: "2024-08-04",
      title: "Together: Progressing through shared value creation",
    },

    { date: "2024-08-01", title: "Maruti Suzuki production volume: July 2024" },

    { date: "2024-08-01", title: "Maruti Suzuki sales in July 2024" },

    {
      date: "2024-07-31",
      title:
        "Maruti Suzuki Financial Results: Quarter 1 (April-June), FY 2024-25",
    },

    {
      date: "2024-07-29",
      title:
        "Maruti Suzuki Grand Vitara continues to “RULE EVERY ROAD”; Clocks fastest 2 lakh unit sales in the mid-SUV space since launch",
    },
  ];

  // Initially render all articles

  renderArticles(articles);

  // Format date function

  function formatDate(dateString) {
    const date = new Date(dateString);

    const options = { month: "short", day: "numeric" };

    return date.toLocaleDateString(undefined, options);
  }

  // Load More functionality - In case you need pagination

  let currentIndex = 0;

  const articlesPerPage = 5;

  function loadMoreArticles() {
    currentIndex += articlesPerPage;

    const moreArticles = articles.slice(
      currentIndex,
      currentIndex + articlesPerPage
    );

    renderArticles(moreArticles);
  }

  loadMoreButton.addEventListener("click", loadMoreArticles);
}
