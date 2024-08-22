export default function decorate(block) {
  // ... (keep the existing variable declarations)

  // Create the main container
  const container = document.createElement("div");
  container.className = "booking-form";

  // Create the dropdown toggle
  const dropdownToggle = document.createElement("div");
  dropdownToggle.className = "dropdown-toggle";
  dropdownToggle.textContent = "Booking Details";
  dropdownToggle.addEventListener("click", () => {
    bookingDetailsContent.style.display =
      bookingDetailsContent.style.display === "none" ? "block" : "none";
    dropdownToggle.classList.toggle("active");
  });

  // Create the booking details content
  const bookingDetailsContent = document.createElement("div");
  bookingDetailsContent.className = "booking-details-content";
  bookingDetailsContent.style.display = "none";

  // Populate the booking details content
  bookingDetailsContent.innerHTML = `
    <h1>${formHeading}</h1>
    <h6>${cityLabel}</h6>
    <h6>${carModel}</h6>
    <h3>${transmission}</h3>
    <div>
      <img src="${manualImage}" alt="Manual Transmission">
      <h2>${manual}</h2>
    </div>
    <div>
      <img src="${automaticImage}" alt="Automatic Transmission">
      <h2>${automatic}</h2>
    </div>
    <h3>${testdriveText}</h3>
    <div>
      <img src="${showroomImage}" alt="Showroom">
      <h2>${showroom}</h2>
    </div>
    <div>
      <img src="${doorstepImage}" alt="Doorstep">
      <h2>${doorstep}</h2>
    </div>
    <h6>${selectedDate}</h6>
    <p>${advance}</p>
  `;

  // Create the user details section
  const userDetails = document.createElement("div");
  userDetails.className = "user-details";
  userDetails.innerHTML = `
    <h3>${nameContext}</h3>
    <h3>${email}</h3>
    <h3>${mobile}</h3>
    <h3>${otp}</h3>
    <p>${agree}</p>
    <p>${conformtext}</p>
    <h3>${anotherTestdriveText}</h3>
    <button>${submit}</button>
  `;

  // Assemble the components
  container.appendChild(dropdownToggle);
  container.appendChild(bookingDetailsContent);
  container.appendChild(userDetails);

  // Replace the block's content with the new structure
  block.innerHTML = "";
  block.appendChild(container);

  // Add some basic styles
  const style = document.createElement("style");
  style.textContent = `
    .booking-form {
      font-family: Arial, sans-serif;
    }
    .dropdown-toggle {
      background-color: #f0f0f0;
      padding: 10px;
      cursor: pointer;
    }
    .dropdown-toggle.active {
      background-color: #e0e0e0;
    }
    .booking-details-content {
      padding: 10px;
      border: 1px solid #ccc;
    }
    .user-details {
      margin-top: 20px;
    }
  `;
  document.head.appendChild(style);
}
