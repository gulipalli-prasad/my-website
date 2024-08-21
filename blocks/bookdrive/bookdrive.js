export default function decorate(block) {
  const [
    formHeadingEl,
    cityLabelEl,
    carModelEl,
    selectTextEl,
    manulaImageEl,
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
  const selectTransmisson = selectTransmissonEl?.textContent?.trim() || "";
  const manualText = manualTextEl?.textContent?.trim() || "";
  const automaticText = automaticTextEl?.textContent?.trim() || "";
  const testDrive = testDriveEl?.textContent?.trim() || "";
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
     <div> 
        <h6>Transmission<h6>
        <ul>
          <li><img src="#" alt="image}" /></li>
          <li><p>${automaticText}</p></li>
        </ul>
        <p>Test Drive at:</p>
        <ul>
          <li><img src="#" alt="image}" /></li>
          <li<p>${automaticText}</p></li>
        </ul>
     </div> 
      <p>Select Date: ${selectDate}</p>
      <p>Advance Text: ${advanceText}</p>
    </div>
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
