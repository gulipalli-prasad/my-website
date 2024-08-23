export default function decorate(block) {
  const [
    formHeadingEl,
    cityLabelEl,
    carModelEl,
    transmissionEl,
    manualImageEl,
    manualEl,
    automaticImageEl,
    automaticEl,
    testdriveTxtEl,
    showroomImageEl,
    showroomEl,
    doorstepImageEl,
    doorstepEl,
    selectedDateEl,
    advanceEl,
    nameContextEl,
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
  const transmission = transmissionEl?.textContent?.trim() || "";

  const manualImageElement = manualImageEl?.querySelector("img");
  const manualImage = manualImageElement?.getAttribute("src")?.trim() || "";
  const manualText = manualEl?.textContent?.trim() || "";

  const automaticImageElement = automaticImageEl?.querySelector("img");
  const automaticImage =
    automaticImageElement?.getAttribute("src")?.trim() || "";
  const automaticText = automaticEl?.textContent?.trim() || "";

  const testdriveTxt = testdriveTxtEl?.textContent?.trim() || "";

  const showroomImageElement = showroomImageEl?.querySelector("img");
  const showroomImage = showroomImageElement?.getAttribute("src")?.trim() || "";
  const showroomText = showroomEl?.textContent?.trim() || "";

  const doorstepImageElement = doorstepImageEl?.querySelector("img");
  const doorstepImage = doorstepImageElement?.getAttribute("src")?.trim() || "";
  const doorstepText = doorstepEl?.textContent?.trim() || "";

  const selectedDate = selectedDateEl?.textContent?.trim() || "";
  const advanceText = advanceEl?.textContent?.trim() || "";

  const nameText = nameContextEl?.textContent?.trim() || "";
  const emailText = emailEl?.textContent?.trim() || "";
  const mobileText = mobileEl?.textContent?.trim() || "";
  const otpText = otpEl?.textContent?.trim() || "";

  const agreeText = agreeEl?.textContent?.trim() || "";
  const conformtext = conformtextEl?.textContent?.trim() || "";
  const anotherTestdriveText = anotherTestdriveEl?.textContent?.trim() || "";
  const submit = submitEl?.textContent?.trim() || "";

  const bookHTML = `
    <h1 class="form-heading">${formHeading}</h1>
    <h6 class="city-label">${cityLabel}</h6>
    <h6 class="car-model">${carModel}</h6>
    <h3 class="transmission-text">${transmission}</h3>
    <div class="manual-transmission">
      <img class="manual-image" src="${manualImage}" alt="Manual Transmission">
      <h2 class="manual-text">${manualText}</h2>
    </div>
    <div class="automatic-transmission">
      <img class="automatic-image" src="${automaticImage}" alt="Automatic Transmission">
      <h2 class="automatic-text">${automaticText}</h2>
    </div>
    <h3 class="testdrive-text">${testdriveTxt}</h3>
    <div class="showroom">
      <img class="showroom-image" src="${showroomImage}" alt="Showroom">
      <h2 class="showroom-text">${showroomText}</h2>
    </div>
    <div class="doorstep">
      <img class="doorstep-image" src="${doorstepImage}" alt="Doorstep">
      <h2 class="doorstep-text">${doorstepText}</h2>
    </div>
    <h6 class="selectdate-text">${selectedDate}</h6>
    <p class="advance-text">${advanceText}</p>
    <h3 class="name-text">${nameText}</h3>
    <h3 class="email-text">${emailText}</h3>
    <h3 class="mobile-text">${mobileText}</h3>
    <h3 class="otp-text">${otpText}</h3>
    <p class="agree-text">${agreeText}</p>
    <p class="conform-text">${conformtext}</p>
    <h3 class="another-testdrive-text">${anotherTestdriveText}</h3>
    <button class="submit-button">${submit}</button>
  `;

  block.innerHTML = bookHTML;
}
