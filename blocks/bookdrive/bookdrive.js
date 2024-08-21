export default function decorate(block) {
  const [
    formHeadingEl,
    cityLabelEl,
    carModelEl,
    selectTransmissonEl,
    manualTextEl,
    automaticTextEl,
    testDriveEl,
    showroomTextEl,
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

  const teaserHtml = `

    <div>
      <h1>${formHeading}</h1>
      <p>${cityLabel}</p>
      <p>${carModel}</p>
     <div> 
      <p>Transmission:</p>
      <ul>
        <li>Manual: ${manualText}</li>
        <li>Automatic: ${automaticText}</li>
      </ul>
     </div> 
      <p>Test Drive at:</p>
      <ul>
        <li>Showroom: ${showroomText}</li>
        <li>Doorstep: ${doorstepText}</li>
      </ul>
      <p>Select Date: ${selectDate}</p>
      <p>Advance Text: ${advanceText}</p>
      <p>Name: ${nameText}</p>
      <p>Email: ${email}</p>
      <p>Mobile: ${mobile}</p>
      <p>OTP: ${otp}</p>
      <p>Agree: ${agree}</p>
      <p>Confirm: ${confirm}</p>
      <p>Another Test Drive: ${anotherTestdrive}</p>
      <button>${buttonText}</button>
    </div>
  `;

  block.innerHTML = teaserHtml;
}
