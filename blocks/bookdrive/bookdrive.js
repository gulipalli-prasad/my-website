export default function decorate(block) {
  const [bookingDetailsTab, userDetailsTab] = block.children;

  // Add click event listener to the tabs

  addTabClickEventListeners(bookingDetailsTab, userDetailsTab);

  // Initial state: show the Booking Details tab

  bookingDetailsTab.classList.add("active");

  userDetailsTab.classList.remove("active");

  const bookdriveHtml = `

    <div class="tabs">

      <div class="tab-header">

        <div class="tab-item">Booking Details</div>

        <div class="tab-item">User Details</div>

      </div>

      <div class="tab-content">

        ${bookingDetailsTab.innerHTML}

      </div>

    </div>

  `;

  block.innerHTML = bookdriveHtml;
}

function addTabClickEventListeners(bookingDetailsTab, userDetailsTab) {
  const tabItems = block.querySelectorAll(".tab-item");

  tabItems.forEach((tabItem, index) => {
    tabItem.addEventListener("click", () => {
      toggleActiveTab(tabItems, index);

      if (index === 0) {
        bookingDetailsTab.classList.add("active");

        userDetailsTab.classList.remove("active");
      } else {
        bookingDetailsTab.classList.remove("active");

        userDetailsTab.classList.add("active");
      }
    });
  });
}

function toggleActiveTab(tabItems, activeIndex) {
  tabItems.forEach((tabItem, index) => {
    if (index === activeIndex) {
      tabItem.classList.add("active");
    } else {
      tabItem.classList.remove("active");
    }
  });
}
