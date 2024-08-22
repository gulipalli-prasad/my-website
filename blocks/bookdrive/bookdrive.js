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

  const formHeading =
    formHeadingEl?.querySelector(".form-heading")?.textContent?.trim() || "";
  const cityLabel =
    cityLabelEl?.querySelector(".city-label")?.textContent?.trim() || "";
  const carModel =
    carModelEl?.querySelector(".car-model")?.textContent?.trim() || "";
  const transmission =
    transmissionEl?.querySelector(".transmission-text")?.textContent?.trim() ||
    "";
  const manualImage =
    manualImageEl
      ?.querySelector(".manual-image")
      ?.getAttribute("src")
      ?.trim() || "";
  const manual =
    manualEl?.querySelector(".manual-text")?.textContent?.trim() || "Manual";
  const automaticImage =
    automaticImageEl
      ?.querySelector(".automatic-image")
      ?.getAttribute("src")
      ?.trim() || "";
  const automatic =
    automaticEl?.querySelector(".automatic-text")?.textContent?.trim() || "";
  const testdriveTxt =
    testdriveTxtEl?.querySelector(".testdrive-text")?.textContent?.trim() || "";
  const showroomImage =
    showroomImageEl
      ?.querySelector(".showroom-image")
      ?.getAttribute("src")
      ?.trim() || "";
  const showroom =
    showroomEl?.querySelector(".showroom-text")?.textContent?.trim() ||
    "Showroom";
  const doorstepImage =
    doorstepImageEl
      ?.querySelector(".doorstep-image")
      ?.getAttribute("src")
      ?.trim() || "";
  const doorstep =
    doorstepEl?.querySelector(".doorstep-text")?.textContent?.trim() || "";
  const selectedDate =
    selectedDateEl?.querySelector(".selectdate-text")?.textContent?.trim() ||
    "";
  const advance =
    advanceEl?.querySelector(".advance-text")?.textContent?.trim() || "";
  const nameContext =
    nameContextEl?.querySelector(".name-text")?.textContent?.trim() || "";
  const emailText =
    emailEl?.querySelector(".email-text")?.textContent?.trim() || "";
  const mobileText =
    mobileEl?.querySelector(".mobile-text")?.textContent?.trim() || "";
  const otpText = otpEl?.querySelector(".otp-text")?.textContent?.trim() || "";
  const agreeText =
    agreeEl?.querySelector(".agree-text")?.textContent?.trim() || "";
  const conformtext =
    conformtextEl?.querySelector(".conform-text")?.textContent?.trim() || "";
  const anotherTestdriveText =
    anotherTestdriveEl
      ?.querySelector(".another-testdrive-text")
      ?.textContent?.trim() || "";
  const submit =
    submitEl?.querySelector(".submit-button")?.textContent?.trim() || "";

  const bookHTML = `
    <h1 class="form-heading">${formHeading}</h1>
    <h6 class="city-label">${cityLabel}</h6>
    <h6 class="car-model">${carModel}</h6>
    <h3 class="transmission-text">${transmission}</h3>
    <div class="manual-transmission">
      <img class="manual-image" src="${manualImage}" alt="Manual Transmission">
      <h2 class="manual-text">${manual}</h2>
    </div>
    <div class="automatic-transmission">
      <img class="automatic-image" src="${automaticImage}" alt="Automatic Transmission">
      <h2 class="automatic-text">${automatic}</h2>
    </div>
    <h3 class="testdrive-text">${testdriveTxt}</h3>
    <div class="showroom">
      <img class="showroom-image" src="${showroomImage}" alt="Showroom">
      <h2 class="showroom-text">${showroom}</h2>
    </div>
    <div class="doorstep">
      <img class="doorstep-image" src="${doorstepImage}" alt="Doorstep">
      <h2 class="doorstep-text">${doorstep}</h2>
    </div>
    <h6 class="selectdate-text">${selectedDate}</h6>
    <p class="advance-text">${advance}</p>
    <h3 class="name-text">${nameContext}</h3>
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
