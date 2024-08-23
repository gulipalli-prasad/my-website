export default function decorate(block) {
  const [text1El, text2El] = block.children;

  const text2 = text2El?.textContent?.trim() || "";
  const text1 = text1El?.textContent?.trim() || "";

  console.log("my text 2 value is: " + text2);
  console.log("my text 1 value is: " + text1);

  const teaserHtml = `
    <div>
      <h4>gulipalli</h4>
      <h5>prasad</h5>
    </div>
  `;

  block.innerHTML = teaserHtml;
}
