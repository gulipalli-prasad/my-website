export default function decorate(block) {
  // Find the tab elements
  const bookingDetailsTab = block.querySelector(
    '[data-cmp-hook-tabs="tab"][aria-controls="bookingDetails"]'
  );
  const userDetailsTab = block.querySelector(
    '[data-cmp-hook-tabs="tab"][aria-controls="userDetails"]'
  );

  // Find the content panels
  const bookingDetailsPanel = block.querySelector("#bookingDetails");
  const userDetailsPanel = block.querySelector("#userDetails");

  if (
    !bookingDetailsTab ||
    !userDetailsTab ||
    !bookingDetailsPanel ||
    !userDetailsPanel
  ) {
    console.error("Required elements not found");
    return;
  }

  // Create a wrapper for the dropdown
  const dropdownWrapper = document.createElement("div");
  dropdownWrapper.className = "tabs-dropdown";

  // Create the dropdown toggle
  const dropdownToggle = document.createElement("button");
  dropdownToggle.className = "tabs-dropdown-toggle";
  dropdownToggle.textContent = bookingDetailsTab.textContent;

  // Create the dropdown content
  const dropdownContent = document.createElement("div");
  dropdownContent.className = "tabs-dropdown-content";
  dropdownContent.style.display = "none";

  // Move the original tabs into the dropdown content
  dropdownContent.appendChild(bookingDetailsTab);
  dropdownContent.appendChild(userDetailsTab);

  // Assemble the dropdown
  dropdownWrapper.appendChild(dropdownToggle);
  dropdownWrapper.appendChild(dropdownContent);

  // Insert the dropdown before the first panel
  bookingDetailsPanel.parentNode.insertBefore(
    dropdownWrapper,
    bookingDetailsPanel
  );

  // Event listener for the dropdown toggle
  dropdownToggle.addEventListener("click", () => {
    dropdownContent.style.display =
      dropdownContent.style.display === "none" ? "block" : "none";
  });

  // Event listeners for the tabs
  [bookingDetailsTab, userDetailsTab].forEach((tab) => {
    tab.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = tab.getAttribute("aria-controls");
      const targetPanel = block.querySelector(`#${targetId}`);

      // Hide all panels
      [bookingDetailsPanel, userDetailsPanel].forEach(
        (panel) => (panel.style.display = "none")
      );

      // Show the target panel
      if (targetPanel) {
        targetPanel.style.display = "block";
      }

      // Update the dropdown toggle text
      dropdownToggle.textContent = tab.textContent;

      // Close the dropdown
      dropdownContent.style.display = "none";
    });
  });

  // Show the Booking Details panel by default
  bookingDetailsPanel.style.display = "block";
  userDetailsPanel.style.display = "none";

  // Add some basic styles
  const style = document.createElement("style");
  style.textContent = `
    .tabs-dropdown {
      position: relative;
      display: inline-block;
    }
    .tabs-dropdown-toggle {
      background-color: #f0f0f0;
      padding: 10px;
      border: 1px solid #ccc;
      cursor: pointer;
    }
    .tabs-dropdown-content {
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }
    .tabs-dropdown-content [data-cmp-hook-tabs="tab"] {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }
    .tabs-dropdown-content [data-cmp-hook-tabs="tab"]:hover {
      background-color: #f1f1f1;
    }
  `;
  document.head.appendChild(style);
}
