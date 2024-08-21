export default function decorate(block) {
  const [
    formHeadingEl,
    cityLabelEl,
    carModelEl,
    selectTextEl,
    manualImageEl,
    manualTextEl,
    automaticImageEl,
    automaticTextEl,
    testdriveTextEl,
    showroomImageEl,
    showroomTextEl,
    doorstepImageEl,
    doorstepTextEl,
    selectDateEl,
    advanceTextEl,
    nameTextEl,
    emailEl,
    mobileEl,
    otpEl,
    agreeEl,
    anotherTestdriveEl,
    buttonTextEl,
  ] = block.children;

  const formHeading = formHeadingEl?.textContent?.trim() || "";
  const cityLabel = cityLabelEl?.textContent?.trim() || "";
  const carModel = carModelEl?.textContent?.trim() || "";

  const selectText = selectTextEl?.textContent?.trim() || "";
  const manualImageElement = manualImageEl.querySelector("img");
  const manualImage = manualImageElement?.getAttribute("src")?.trim() || "";
  const manualText = manualTextEl?.textContent?.trim() || "";
  const automaticImageElement = automaticImageEl.querySelector("img");
  const automaticImage =
    automaticImageElement?.getAttribute("src")?.trim() || "";
  const automaticText = automaticTextEl?.textContent?.trim() || "";

  const testdriveText = testdriveTextEl?.textContent?.trim() || "";
  const showroomImageElement = showroomImageEl.querySelector("img");
  const showroomImage = showroomImageElement?.getAttribute("src")?.trim() || "";
  const showroomText = showroomTextEl?.textContent?.trim() || "";
  const doorstepImageElement = doorstepImageEl.querySelector("img");
  const doorstepImage = doorstepImageElement?.getAttribute("src")?.trim() || "";
  const doorstepText = doorstepTextEl?.textContent?.trim() || "";

  const selectDate = selectDateEl?.textContent?.trim() || "";
  const advanceText = advanceTextEl?.textContent?.trim() || "";

  const nameText = nameTextEl?.textContent?.trim() || "";
  const email = emailEl?.textContent?.trim() || "";
  const mobile = mobileEl?.textContent?.trim() || "";
  const otp = otpEl?.textContent?.trim() || "";
  const agree = agreeEl?.textContent?.trim() || "";
  const anotherTestdrive = anotherTestdriveEl?.textContent?.trim() || "";
  const buttonText = buttonTextEl?.textContent?.trim() || "";

  const bookdriveHtml = `
    <div>
      <h1>${formHeading}</h1>
      <p>${cityLabel}</p>
      <p>${carModel}</p>
      <h6>${selectText}</h6>
      <img src="${manualImage}" alt="Manual" />
      <p>${manualText}</p>
      <img src="${automaticImage}" alt="Automatic" />
      <p>${automaticText}</p>
      <h6>${testdriveText}</h6>
      <img src="${showroomImage}" alt="Showroom" />
      <p>${showroomText}</p>
      <img src="${doorstepImage}" alt="Doorstep" />
      <p>${doorstepText}</p>
      <p>${selectDate}</p>
      <p>${advanceText}</p>
    </div> 
    <div>
      <p>${nameText}</p>
      <p>${email}</p>
      <p>${mobile}</p>
      <p>${otp}</p>
      <p>${agree}</p>
      <p>${anotherTestdrive}</p>
      <button>${buttonText}</button>
    </div>
  `;

  block.innerHTML = bookdriveHtml;
}
