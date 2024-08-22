export default function decorate(block) {
  const [
    formHeadingEl,
    cityLabelEl,
    carModelEl,
    transmissionTextEl,
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
    conformtextEl,
    anotherTestdriveEl,
    submitEl,
  ] = block.children;

  const formHeading = formHeadingEl?.textContent?.trim() || "";
  const cityLabel = cityLabelEl?.textContent?.trim() || "";
  const carModel = carModelEl?.textContent?.trim() || "";
  const transmissionText = transmissionTextEl?.textContent?.trim() || "";
  const manualImageElement = manualImageEl?.querySelector("img");
  const manualImage = manualImageElement?.getAttribute("src")?.trim() || "";
  const manualText = manualTextEl?.textContent?.trim() || "Manual";
  const automaticImageElement = automaticImageEl?.querySelector("img");
  const automaticImage =
    automaticImageElement?.getAttribute("src")?.trim() || "";
  const automaticText = automaticTextEl?.textContent?.trim() || "";
  const testdriveText = testdriveTextEl?.textContent?.trim() || "";
  const showroomImageElement = showroomImageEl?.querySelector("img");
  const showroomImage = showroomImageElement?.getAttribute("src")?.trim() || "";
  const showroomText = showroomTextEl?.textContent?.trim() || "Showroom";
  const doorstepImageElement = doorstepImageEl?.querySelector("img");
  const doorstepImage = doorstepImageElement?.getAttribute("src")?.trim() || "";
  const doorstepText = doorstepTextEl?.textContent?.trim() || "";
  const selectdateText = selectdateTextEl?.textContent?.trim() || "";
  const advanceText = advanceTextEl?.textContent?.trim() || "";
  const nameText = nameTextEl?.textContent?.trim() || "";
  const emailText = emailEl?.textContent?.trim() || "";
  const mobileText = mobileEl?.textContent?.trim() || "";
  const otpText = otpEl?.textContent?.trim() || "";
  const agreeText = agreeEl?.textContent?.trim() || "";
  const conformtext = conformtextEl?.textContent?.trim() || "";
  const anotherTestdriveText = anotherTestdriveEl?.textContent?.trim() || "";
  const submit = submitEl?.textContent?.trim() || "";

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
