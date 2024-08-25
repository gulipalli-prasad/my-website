export default function decorate(block) {
  const testHtml = `
    <div class="my-component">
      <div class="section-3">
        <h3>GOOGLE</h3>
      </div>
      <div class="section-5">
        <a href="https://www.google.com/" target="_blank">URL</a>
      </div>
    </div>
  `;
  block.innerHTML = testHtml;
}
