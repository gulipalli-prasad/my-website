export default function decorate(block) {
  const [
    imageEl,
    altTextEl,
    pretitleEl,
    titleEl,
    descriptionEl,
    primaryCtaTextEl,
    primaryCtaLinkEl,
  ] = block.children;

  const imageElement = imageEl.querySelector("img");
  const image = imageElement?.getAttribute("src")?.trim() || "";
  const altText = altTextEl?.textContent?.trim() || "";
  const pretitle = pretitleEl?.textContent?.trim() || "";
  const title = titleEl?.textContent?.trim() || "";
  const description = descriptionEl?.textContent?.trim() || "";
  const primaryCtaText = primaryCtaTextEl?.textContent?.trim() || "";
  const primaryCtaLink = primaryCtaLinkEl?.querySelector("a")?.href || "#";

  const teaserHtml = `
    <div>
      <img src="${image}" alt="${altText}" />
      <h4>${pretitle}</h4>
      <h5>${title}</h5>
      <p>${description}</p>
      <a href="${primaryCtaLink}">${primaryCtaText}</a>
    </div>
  `;

  block.innerHTML = teaserHtml;
}
