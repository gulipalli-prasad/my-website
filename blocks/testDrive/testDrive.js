export default function decorate(block) {
  // Log block children to inspect structure
  console.log("Block Children:", block.children);

  // Filter out empty text nodes and trim the content of relevant elements
  const textNodes = Array.from(block.children)
    .map((el) => el.textContent?.trim() || "")
    .filter((text) => text.length > 0);

  // Log to see what texts are being captured
  console.log("Filtered Text Nodes:", textNodes);

  const [text1 = "", text2 = "", text3 = "", text4 = ""] = textNodes;

  console.log("text 1 val is: " + text1);
  console.log("text 2 val is: " + text2);

  const testHtml = `
    <div class="main-conatiner">
      <div class="section-1">
       <h3>${text1}</h3>
      </div>

      <div class="section-2">
       <h3>${text2}</h3>
      </div>
    </div>

    <div class="section-3">
       <h3>prasad</h3>
      </div>
    </div>

     <div class="section-4">
       <button>gg</button>
      </div>

      <div class="section-5">
       <a href="${text3}">${text4}</a>
       </div>

    </div>
  `;

  block.innerHTML = testHtml;
}
