export default function decorate(block) {
  const { fields } = JSON.parse(block.textContent);

  // Create the HTML structure

  const bookdriveHtml = `

    <div class="booking-details-wrapper">

      <div class="booking-details-header">Booking Details</div>

      <div class="booking-details-content">

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

    </div>

    <div class="user-details-wrapper">

      <div class="user-details-header">User Details</div>

      <div class="user-details-content">

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

  `;

  block.innerHTML = bookdriveHtml;

  // Add event listeners for the collapsible sections

  addCollapsibleEventListeners(block);
}

function addCollapsibleEventListeners(block) {
  const bookingDetailsHeader = block.querySelector(".booking-details-header");

  const bookingDetailsContent = block.querySelector(".booking-details-content");

  const userDetailsHeader = block.querySelector(".user-details-header");

  const userDetailsContent = block.querySelector(".user-details-content");

  bookingDetailsHeader.addEventListener("click", () => {
    toggleCollapsible(bookingDetailsHeader, bookingDetailsContent);
  });

  userDetailsHeader.addEventListener("click", () => {
    toggleCollapsible(userDetailsHeader, userDetailsContent);
  });
}

function toggleCollapsible(header, content) {
  header.classList.toggle("collapsed");

  content.style.display = header.classList.contains("collapsed")
    ? "none"
    : "block";
}
