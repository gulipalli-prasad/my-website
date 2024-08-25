export default function decorate(block) {
  // // Filter out empty text nodes and trim the content of relevant elements
  // const textNodes = Array.from(block.children)
  //   .map((el) => el.textContent?.trim() || "")
  //   .filter((text) => text.length > 0);

  // // Log to see what texts are being captured
  // console.log("Filtered Text Nodes:", textNodes);

  // // Extract text and link information
  // const [text1 = "", text2 = "", linkPath = "", url = ""] = textNodes;

  // console.log("text 1 val is: " + text1);
  // console.log("text 2 val is: " + text2);

  // // Ensure the link ends with .html
  // let link = linkPath;
  // // if (link && !link.endsWith(".html")) {
  // //   link += ".html";
  // // }

  // console.log("link val is: " + link);
  // console.log("url val is: " + url);

  const testHtml = `
    <div class="section-3">
       <h3>GOOGLE</h3>
      </div>

      <div class="section-5">
       <a href="https://www.google.com/">URL</a>
      </div>
    </div>
  `;

  block.innerHTML = testHtml;
}
