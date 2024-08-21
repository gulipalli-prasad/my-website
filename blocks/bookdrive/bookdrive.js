export default function decorate(block) {
  const { fields } = JSON.parse(block.textContent);

  // Create the HTML structure

  const bookdriveHtml = `

    <div class="tabs">

      <div class="tab-header">

        <div class="tab-item">Booking Details</div>

        <div class="tab-item">User Details</div>

      </div>

      <div class="tab-content">

        <div class="tab-pane">

          <h2>${fields.formHeading.value}</h2>

          <div class="form-group">

            <label>${fields.cityLabel.value}</label>

            <input type="text" value="${fields.carModel.value}" readonly />

          </div>

          <div class="form-group">

            <span>${fields.selectdateText.value}</span>

            <span>${fields.advanceText.value}</span>

          </div>

        </div>

        <div class="tab-pane">

          <h2>${fields.nameText.value}</h2>

          <div class="form-group">

            <label>${fields.email.value}</label>

            <input type="email" />

          </div>

          <div class="form-group">

            <label>${fields.mobile.value}</label>

            <input type="tel" />

          </div>

          <div class="form-group">

            <label>${fields.otp.value}</label>

            <input type="text" />

          </div>

          <div class="form-group">

            <span>${fields.agree.value}</span>

          </div>

          <div class="form-group">

            <span>${fields.conformText.value}</span>

            <a href="#">${fields.submit.value}</a>

          </div>

          <div class="form-group">

            <span>${fields.anotherTestdrive.value}</span>

          </div>

        </div>

      </div>

    </div>

  `;

  block.innerHTML = bookdriveHtml;

  // Add event listeners for the tabs

  addTabClickEventListeners(block);
}

function addTabClickEventListeners(block) {
  const tabItems = block.querySelectorAll(".tab-item");

  const tabPanes = block.querySelectorAll(".tab-pane");

  tabItems.forEach((tabItem, index) => {
    tabItem.addEventListener("click", () => {
      toggleActiveTab(tabItems, tabPanes, index);
    });
  });
}

function toggleActiveTab(tabItems, tabPanes, activeIndex) {
  tabItems.forEach((tabItem, index) => {
    if (index === activeIndex) {
      tabItem.classList.add("active");

      tabPanes[index].classList.add("active");
    } else {
      tabItem.classList.remove("active");

      tabPanes[index].classList.remove("active");
    }
  });
}
