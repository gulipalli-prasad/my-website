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

  const manualImageElement = manualImageEl.querySelector("img");
  const manualImage = manualImageElement?.getAttribute("src")?.trim() || "";
  const manual = manualEl?.textContent?.trim() || "";

  const automaticImageElement = automaticImageEl.querySelector("img");
  const automaticImage =
    automaticImageElement?.getAttribute("src")?.trim() || "";
  const automatic = automaticEl?.textContent?.trim() || "";

  const testdriveTxt = testdriveTxtEl?.textContent?.trim() || "";

  const showroomImageElement = showroomImageEl.querySelector("img");
  const showroomImage = showroomImageElement?.getAttribute("src")?.trim() || "";
  const showroom = showroomEl?.textContent?.trim() || "";

  const doorstepImageElement = doorstepImageEl.querySelector("img");
  const doorstepImage = doorstepImageElement?.getAttribute("src")?.trim() || "";
  const doorstep = doorstepEl?.textContent?.trim() || "";

  const selectedDate = selectedDateEl?.textContent?.trim() || "";
  const advance = advanceEl?.textContent?.trim() || "";

  const nameContext = nameContextEl?.textContent?.trim() || "";
  const email = emailEl?.textContent?.trim() || "";
  const mobile = mobileEl?.textContent?.trim() || "";
  const otp = otpEl?.textContent?.trim() || "";

  const agree = agreeEl?.textContent?.trim() || "";
  const conformtext = conformtextEl?.textContent?.trim() || "";
  const anotherTestdriveText = anotherTestdriveEl?.textContent?.trim() || "";
  const submit = submitEl?.textContent?.trim() || "";

  // const bookHTML = `
  //   <h1 class="form-heading">${formHeading}</h1>
  //   <h6 class="city-label">${cityLabel}</h6>
  //   <h6 class="car-model">${carModel}</h6>
  //   <h3 class="transmission-text">${transmission}</h3>
  //   <div class="manual-transmission">
  //     <img class="manual-image" src="${manualImage}" alt="Manual Transmission">
  //     <h2 class="manual-text">${manual}</h2>
  //   </div>
  //   <div class="automatic-transmission">
  //     <img class="automatic-image" src="${automaticImage}" alt="Automatic Transmission">
  //     <h2 class="automatic-text">${automatic}</h2>
  //   </div>
  //   <h3 class="testdrive-text">${testdriveTxt}</h3>
  //   <div class="showroom">
  //     <img class="showroom-image" src="${showroomImage}" alt="Showroom">
  //     <h2 class="showroom-text">${showroom}</h2>
  //   </div>
  //   <div class="doorstep">
  //     <img class="doorstep-image" src="${doorstepImage}" alt="Doorstep">
  //     <h2 class="doorstep-text">${doorstep}</h2>
  //   </div>
  //   <h6 class="selectdate-text">${selectedDate}</h6>
  //   <p class="advance-text">${advance}</p>
  //   <h3 class="name-text">${nameContext}</h3>
  //   <h3 class="email-text">${email}</h3>
  //   <h3 class="mobile-text">${mobile}</h3>
  //   <h3 class="otp-text">${otp}</h3>
  //   <p class="agree-text">${agree}</p>
  //   <p class="conform-text">${conformtext}</p>
  //   <h3 class="another-testdrive-text">${anotherTestdriveText}</h3>
  //   <button class="submit-button">${submit}</button>
  // `;

  // block.innerHTML = bookHTML;
}
