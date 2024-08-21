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
    confirmEl,
    anotherTestdriveEl,
    buttonTextEl,
  ] = block.children;

  const formHeading = formHeadingEl?.textContent?.trim() || "";
  const cityLabel = cityLabelEl?.textContent?.trim() || "";
  const carModel = carModelEl?.textContent?.trim() || "";
  const selectText = selectTextEl?.textContent?.trim() || "";

  const manualImageElement = manualImageEl.querySelector("img");
  const manualImage = manualImageElement?.getAttribute("src")?.trim() || "";
  const automaticImageElement = automaticImageEl.querySelector("img");
  const automaticImage =
    automaticImageElement?.getAttribute("src")?.trim() || "";
  const showroomImageElement = showroomImageEl.querySelector("img");
  const showroomImage = showroomImageElement?.getAttribute("src")?.trim() || "";
  const doorstepImageElement = doorstepImageEl.querySelector("img");
  const doorstepImage = doorstepImageElement?.getAttribute("src")?.trim() || "";

  const manualText = manualTextEl?.textContent?.trim() || "";
  const automaticText = automaticTextEl?.textContent?.trim() || "";
  const testdriveText = testdriveTextEl?.textContent?.trim() || "";
  const showroomText = showroomTextEl?.textContent?.trim() || "";
  const doorstepText = doorstepTextEl?.textContent?.trim() || "";
  const selectDate = selectDateEl?.textContent?.trim() || "";
  const advanceText = advanceTextEl?.textContent?.trim() || "";
  const nameText = nameTextEl?.textContent?.trim() || "";
  const email = emailEl?.textContent?.trim() || "";
  const mobile = mobileEl?.textContent?.trim() || "";
  const otp = otpEl?.textContent?.trim() || "";
  const agree = agreeEl?.textContent?.trim() || "";
  const confirm = confirmEl?.textContent?.trim() || "";
  const anotherTestdrive = anotherTestdriveEl?.textContent?.trim() || "";
  const buttonText = buttonTextEl?.textContent?.trim() || "";

  const bookdriveHtml = `
    <div>
      <h1>${formHeading}</h1>
      <p>${cityLabel}</p>
      <p>${carModel}</p>
    </div>
    
    <div> 
      <h6>${selectText}</h6>
      <ul>
        <li><img src="${manualImage}" alt="Manual" /></li>
        <li><p>${manualText}</p></li>
      </ul>
      <ul>
        <li><img src="${automaticImage}" alt="Automatic" /></li>
        <li><p>${automaticText}</p></li>
      </ul>
      <h6>${testdriveText}</h6>
      <ul>
        <li><img src="${showroomImage}" alt="Showroom" /></li>
        <li><p>${showroomText}</p></li>
      </ul>
      <ul>
        <li><img src="${doorstepImage}" alt="Doorstep" /></li>
        <li><p>${doorstepText}</p></li>
      </ul>
    </div> 
      <p>${selectDate}</p>
      <p>${advanceText}</p>
    
    <div>
      <p>${nameText}</p>
      <p>${email}</p>
      <p>${mobile}</p>
      <p>${otp}</p>
      <p>${agree}</p>
      <p>${confirm}</p>
      <p>${anotherTestdrive}</p>
      <button>${buttonText}</button>
    </div>
  `;

  block.innerHTML = bookdriveHtml;
}
