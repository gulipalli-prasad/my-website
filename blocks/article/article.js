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
    articles = data.articles; // Adjust based on your API response structure
    filteredArticles = articles;
    renderArticles();
    renderYearFilter();
  }

  function renderArticles(filteredArticles) {
    const start = (currentPage - 1) * ARTICLES_PER_PAGE;
    const end = start + ARTICLES_PER_PAGE;
    const articlesToRender = filteredArticles.slice(0, end);

    articleListContainer.innerHTML = articlesToRender
      .map(
        (article) => `
      <div class="article-item">
        <span class="article-date">${article.date}</span>
        <a href="${article._path}" class="article-title">${article.title}</a>

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

// Mock data (replace with actual data fetching)
const mockArticles1 = [
  {
    date: "2024-08-13",
    title:
      "Prasad - Maruti Suzuki commences export of its award-winning SUV Fronx to Japan, a tribute to 'Make in India' initiative",
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
      "Maruti Suzuki Grand Vitara continues to 'RULE EVERY ROAD': Clocks fastest 2 lakh unit sales in the mid-SUV space since launch",
  },
  { date: "2023-12-15", title: "Sample article from 2023" },
  { date: "2022-06-01", title: "Sample article from 2022" },
];

const mockArticles = [
  {
    _path: "/content/dam/my-website/content-fragments/article-five",
    title: null,
    description: {
      plaintext: null,
    },
    pdf: null,
  },
  {
    _path: "/content/dam/my-website/content-fragments/article-four",
    title:
      "Maruti Suzuki commences export of its award-winning SUV Fronx to Japan, a tribute to ‘Make in India’ initiative",
    description: {
      plaintext:
        "• Fronx marks the first ‘Made-in-India’ SUV from Maruti Suzuki to be exported to Japan\n\n• First consignment of over 1,600 Fronx shipped from Pipavav port in Gujarat\n\nNew Delhi/Pipavav : Maruti Suzuki India Limited, India’s leading automobile manufacturing company, today commenced export of its ‘Made-in-India’ SUV Fronx to Japan. Fronx will be the first SUV from Maruti Suzuki to launch in Japan. The landmark milestone celebrates the spirit of ‘Make in India’ initiative and echoes national pride. Fronx is exclusively manufactured at Maruti Suzuki’s state-of-the art Gujarat plant. The first consignment of over 1,600 vehicles left for Japan from Gujarat’s Pipavav port.\n\nThe award-winning Fronx is the second model from Maruti Suzuki to be exported to Japan, after Baleno in 2016. Fronx is planned to be launched in Japan by Suzuki Motor Corporation, Maruti Suzuki’s parent company, in the autumn of 2024. The historic milestone symbolizes the growing strength and global reach of the Indian manufacturing industry.",
    },
    pdf: {
      __typename: "DocumentRef",
      _path:
        "/content/dam/my-website/pdfs/Maruti_Suzuki_commences_export_of_its_award-winning_Fronx_to_Japan_13082024.pdf",
    },
  },
  {
    _path: "/content/dam/my-website/content-fragments/article-one",
    title:
      "Maruti Suzuki to set up its 4th Japan-India Institute for Manufacturing (JIM), in Haryana",
    description: {
      plaintext:
        "Company’s JIM in Kansala, Rohtak to train over 200 youth annually.\n\nFive specialized automotive trade courses offered.\n\n\n\nNew Delhi: Maruti Suzuki India Limited (MSIL) signed a Memorandum of Agreement (MoA) with the Government of Haryana to set up 2nd Japan-India Institute for Manufacturing (JIM), in Haryana, at Kansala, in Rohtak. Spread over 5 acres, the existing ITI Kansala will be upgraded to a JIM with an investment of Rs. 5.8 crore as a CSR activity of the company.\n\nThe MoA was signed by Dr. Vivek Aggarwal, Director General, Skill Development & Industrial Training, Government of Haryana and Mr. Rahul Bharti, Executive Director, Corporate Affairs, Maruti Suzuki India Limited.\n\n\n\nOn this occasion, Mr. Rahul Bharti, Executive Director, Corporate Affairs, Maruti Suzuki India Limited, said, “ The Indian passenger vehicle industry is now world’s third largest and growing. It is our responsibility to prepare human capacity corresponding to manufacturing capacity to meet this growth. Skilling our youth with industry ready skills will help us realize the vision of an Atmanirbhar Bharat. We are glad to partner with the Haryana Government and share the common vision of training and skilling the youth so that they can contribute towards the growth of Haryana.”\n\nMr. Bharti added: “We have been operating Japan-India Institutes for Manufacturing (JIMs) since 2017. The key feature of the JIM is that the equipment on which the students are trained is almost similar to that in a modern production factory. In addition there is a focus on safety, quality, discipline, punctuality, Kaizen, and other Japanese shop floor practices along with the core curriculum prescribed by the National Council for Vocational Training(NCVT). That helps better employability.”\n\nLocated about 16 kms from the upcoming automobile hub Kharkhoda, JIM Kansala will offer extensive career opportunities to the students trained at the ITI.\n\nThe government of Haryana has provided the land and building for the JIM, Kansala. Maruti Suzuki will provide equipment, training modules, trained teachers, and will manage this institute for 15 years.\n\nAbout Japan-India Institute for Manufacturing (JIM)\n\nJapan-India Institute for Manufacturing (JIM) is born out of a collaboration between the Governments of Japan and India to create a pool of skilled workforce for manufacturing in India. It follows from a Memorandum of Cooperation (MoC) signed in 2016 between the Ministry of Economy, Trade and Industry, Government of Japan (METI) and Ministry of Skill Development and Entrepreneurship, Government of India (MSDE), for a “Manufacturing Skill Transfer Promotion Programme” to train 30,000 youths in India over 10 years.\n\nCommitted to effectively contributing to Skill Development in India, Maruti Suzuki additionally supports around 50 government ITIs across the country to impart industry-relevant skills to youth and make them employable.\n\n",
    },
    pdf: {
      __typename: "DocumentRef",
      _path:
        "/content/dam/my-website/pdfs/Maruti_Suzuki_to_set_up_its_4th_Japan_India_Institute_for_Manufacturing_JIM_in_Haryana.pdf",
    },
  },
  {
    _path: "/content/dam/my-website/content-fragments/article-six",
    title: null,
    description: {
      plaintext: null,
    },
    pdf: null,
  },
  {
    _path: "/content/dam/my-website/content-fragments/article-three",
    title: "What is Lorem Ipsum three?",
    description: {
      plaintext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    pdf: {
      __typename: "DocumentRef",
      _path: "/content/dam/my-website/pdfs/file-sample_150kB.pdf",
    },
  },
  {
    _path: "/content/dam/my-website/content-fragments/article-two",
    title: "What is Lorem Ipsum two?",
    description: {
      plaintext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    pdf: {
      __typename: "DocumentRef",
      _path: "/content/dam/my-website/pdfs/file-sample_150kB.pdf",
    },
  },
];
