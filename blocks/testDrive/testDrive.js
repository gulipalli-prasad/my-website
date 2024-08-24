export default function decorate(block) {
  console.log("Block Children:", block.children);

  const textNodes = Array.from(block.children)
    .map((el) => el.textContent?.trim() || "")
    .filter((text) => text.length > 0);

  console.log("Filtered Text Nodes:", textNodes);

  const [text1 = "", text2 = "", link = "", url = ""] = textNodes;

  let formattedLink = link;
  if (link && !link.endsWith(".html")) {
    formattedLink = `${link}.html`;
  }

  console.log("text 1 val is: " + text1);
  console.log("text 2 val is: " + text2);
  console.log("link val is: " + formattedLink);
  console.log("url val is: " + url);

  const testHtml = `
    <div class="main-container" style="display: flex; flex-direction: column; align-items: center;">
      <div class="section-1" style="text-align: center;">
        <h3 style="margin: 0;">${text1}</h3>
      </div>
      <div class="section-2" style="text-align: center;">
        <h3 style="margin: 0;">${text2}</h3>
      </div>
      <div class="section-3" style="text-align: center;">
        <h3 style="margin: 0;">prasad</h3>
      </div>
      <div class="section-4" style="text-align: center;">
        <button style="background-color: blue; color: white; border-radius: 10px; padding: 10px 20px;">gg</button>
      </div>
      <div class="section-5" style="text-align: center;">
        <a href="${formattedLink}" style="color: white; background-color: blue; padding: 10px 20px; border-radius: 10px; text-decoration: none; display: inline-block;">
          ${url}
        </a>
      </div>
    </div>
  `;

  block.innerHTML = testHtml;
}
