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
    conformtextEl,
    anotherTestdriveEl,
    submitEl,
  ] = block.children;

  // const imageElement = imageEl.querySelector("img");
  // const image = imageElement?.getAttribute("src")?.trim() || "";
  const formHeading = formHeadingEl?.textContent?.trim() || "";

  block.innerHTML = `
    <h2>${formHeading}</h2>
    <h6>Select City</h6>
    <h6>Car Model</h6>
    <h3>Select Transmission</h3>
    <div>
      <img src="path-to-manual-image" alt="Manual Transmission">
      <h2>Manual</h2>
    </div>
    <div>
      <img src="path-to-automatic-image" alt="Automatic Transmission">
      <h2>Automatic</h2>
    </div>
    <h3>Test Drive</h3>
    <div>
      <img src="path-to-showroom-image" alt="Showroom">
      <h2>Showroom</h2>
    </div>
    <div>
      <img src="path-to-doorstep-image" alt="Doorstep">
      <h2>Doorstep</h2>
    </div>
    <h6>Select Date</h6>
    <p>Date and slot can be booked 12 hours in advance.</p>
    <h3>Name</h3>
    <h3>Email</h3>
    <h3>Mobile</h3>
    <h3>OTP</h3>
    <p>I agree that by clicking the 'Submit' button below, I am explicitly soliciting a Call/SMS/Whatsapp from Maruti Suzuki India Ltd. or its partners on my 'Mobile'.</p>
    <p>I confirm that I have a valid driving license and will be producing the original before I take the test drive.</p>
    <h3>add another test drive</h3>
    <button>Submit</button>
  `;
}
