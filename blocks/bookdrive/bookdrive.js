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
    selectdateTextEl,
    advanceTextEl,
    nameTextEl,
    emailEl,
    mobileEl,
    otpEl,
    agreeEl,
    conformTextEl,
    anotherTestdriveEl,
    submitEl,
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

  const selectdateText = selectdateTextEl?.textContent?.trim() || "";
  const advanceText = advanceTextEl?.textContent?.trim() || "";

  const nameText = nameTextEl?.textContent?.trim() || "";
  const email = emailEl?.textContent?.trim() || "";
  const mobile = mobileEl?.textContent?.trim() || "";
  const otp = otpEl?.textContent?.trim() || "";
  const agree = agreeEl?.textContent?.trim() || "";
  const conformText = conformTextEl?.textContent?.trim() || "";
  const anotherTestdrive = anotherTestdriveEl?.textContent?.trim() || "";
  const submit = submitEl?.textContent?.trim() || "";

  block.innerHTML = `
    <h1>${formHeading}</h1>
    <h6>${cityLabel}</h6>
    <h6>${carModel}</h6>
    <h3>${selectText}</h3>
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
    <h3>${email}</h3>
    <h3>${mobile}</h3>
    <h3>${otp}</h3>
    <p>${agree}</p>
    <p>${conformText}</p>
    <h3>${anotherTestdrive}</h3>
    <button>${submit}</button>
  `;
}
