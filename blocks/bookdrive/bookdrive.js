export default function decorate(block) {
  const [formHeadingEl] = block.children;

  const formHeading = formHeadingEl?.textContent?.trim() || "";

  block.innerHTML = `
    <h1>${formHeading}</h1>
    <h6>${cityLabel}</h6>
    <h6>${carModel}</h6>
    <h3>${transmissionText}</h3>
    <div>
      <img src="${manualImage}" alt="Manual Transmission">
      <h2>${manualText}</h2>
    </div>
    <div>
      <img src="${automaticImage}" alt="Automatic Transmission">
      <h2>${automaticText}</h2>
    </div>
    <h3>${testdriveText}</h3>
    <div>
      <img src="${showroomImage}" alt="Showroom">
      <h2>${showroomText}</h2>
    </div>
    <div>
      <img src="${doorstepImage}" alt="Doorstep">
      <h2>${doorstepText}</h2>
    </div>
    <h6>${selectdateText}</h6>
    <p>${advanceText}</p>
    <h3>${nameText}</h3>
    <h3>${emailText}</h3>
    <h3>${mobileText}</h3>
    <h3>${otpText}</h3>
    <p>${agreeText}</p>
    <p>${conformtext}</p>
    <h3>${anotherTestdriveText}</h3>
    <button>${submit}</button>
  `;
}
