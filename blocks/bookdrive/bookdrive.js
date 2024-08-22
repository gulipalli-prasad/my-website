export default function decorate(block) {
  // Find the tab container
  const tabContainer = block.querySelector('[data-cmp-is="tabs"]');
  if (!tabContainer) return;

  // Find the tab elements
  const tabs = tabContainer.querySelectorAll('[data-cmp-hook-tabs="tab"]');
  if (tabs.length !== 2) return;

  // Create dropdown elements
  const dropdownContainer = document.createElement("div");
  dropdownContainer.className = "cmp-tabs-dropdown";

  const dropdownButton = document.createElement("button");
  dropdownButton.className = "cmp-tabs-dropdown__button";
  dropdownButton.textContent = tabs[0].textContent;

  const dropdownContent = document.createElement("div");
  dropdownContent.className = "cmp-tabs-dropdown__content";

  // Move tabs into dropdown content
  tabs.forEach((tab) => {
    const item = document.createElement("div");
    item.className = "cmp-tabs-dropdown__item";
    item.textContent = tab.textContent;
    item.addEventListener("click", () => {
      tab.click(); // Trigger the original tab click
      dropdownButton.textContent = tab.textContent;
      dropdownContent.style.display = "none";
    });
    dropdownContent.appendChild(item);
  });

  // Assemble dropdown
  dropdownContainer.appendChild(dropdownButton);
  dropdownContainer.appendChild(dropdownContent);

  // Insert dropdown before tab container
  tabContainer.parentNode.insertBefore(dropdownContainer, tabContainer);

  // Hide original tabs
  tabContainer.style.display = "none";

  // Dropdown toggle functionality
  dropdownButton.addEventListener("click", () => {
    dropdownContent.style.display =
      dropdownContent.style.display === "none" ? "block" : "none";
  });

  // Add styles
  const style = document.createElement("style");
  style.textContent = `
    .cmp-tabs-dropdown {
      position: relative;
      display: inline-block;
    }
    .cmp-tabs-dropdown__button {
      background-color: #f8f8f8;
      border: 1px solid #ddd;
      padding: 10px;
      cursor: pointer;
    }
    .cmp-tabs-dropdown__content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }
    .cmp-tabs-dropdown__item {
      padding: 12px 16px;
      cursor: pointer;
    }
    .cmp-tabs-dropdown__item:hover {
      background-color: #f1f1f1;
    }
  `;
  document.head.appendChild(style);
}
