export default function decorate(block) {
  function getTestDrive() {
    const [text1El, text2El] = block.children;

    const text1 = text1El?.textContent?.trim() || "";
    const text2 = text2El?.textContent?.trim() || "";

    return {
      text1,
      text2,
    };
  }

  const textContentData = getTestDrive();

  const teaserHtml = `
    <div class="main-conatiner">
      <div class="section-1">
       <h3>${textContentData.text1}</h3>
      </div>

      <div class="section-2">
       <h3>${textContentData.text2}</h3>
      </div>
    </div>
  `;

  block.innerHTML = teaserHtml;
}
