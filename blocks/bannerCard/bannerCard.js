export default function decorate(block) {
  const [imageEl, altTextEl, titleEl, descriptionEl] = block.children;

  const imageElement = imageEl.querySelector("img");
  const imageBanner = imageElement?.getAttribute("src")?.trim() || "";
  const altText = altTextEl?.textContent?.trim() || "";
  const imageTitle = titleEl?.textContent?.trim() || "";
  const imageDescription = descriptionEl?.textContent?.trim() || "";

  const BannerHTML = `
<div class="main-container">
<div class="banner-container">
  <div class="banner-image">
  <img src="${imageBanner}" alt="${altText}">
    <div class="banner-content">
      <div class="bannerCard-title">
      ${imageTitle}
      </div>
      <div class="bannerCard-description">
      ${imageDescription}
      </div>
    </div>
  </div>
</div>
</div>
`;

  block.innerHTML = BannerHTML;
}
