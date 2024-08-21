// export default function decorate(block) {
//   const [
//     formHeadingEl,
//     cityLabelEl,
//     carModelEl,
//     selectTextEl,
//     manualImageEl,
//     manualTextEl,
//     automaticImageEl,
//     automaticTextEl,
//     testdriveTextEl,
//     showroomImageEl,
//     showroomTextEl,
//     doorstepImageEl,
//     doorstepTextEl,
//     selectdateTextEl,
//     advanceTextEl,
//     nameTextEl,
//     emailEl,
//     mobileEl,
//     otpEl,
//     agreeEl,
//     conformTextEl,
//     anotherTestdriveEl,
//     submitEl
//   ] = block.children;

//   const formHeading = formHeadingEl?.textContent?.trim() || "";
//   const cityLabel = cityLabelEl?.textContent?.trim() || "";
//   const carModel = carModelEl?.textContent?.trim() || "";

//   const selectText = selectTextEl?.textContent?.trim() || "";
//   const manualImageElement = manualImageEl.querySelector("img");
//   const manualImage = manualImageElement?.getAttribute("src")?.trim() || "";
//   const manualText = manualTextEl?.textContent?.trim() || "";
//   const automaticImageElement = automaticImageEl.querySelector("img");
//   const automaticImage =
//     automaticImageElement?.getAttribute("src")?.trim() || "";
//   const automaticText = automaticTextEl?.textContent?.trim() || "";

//   const testdriveText = testdriveTextEl?.textContent?.trim() || "";
//   const showroomImageElement = showroomImageEl.querySelector("img");
//   const showroomImage = showroomImageElement?.getAttribute("src")?.trim() || "";
//   const showroomText = showroomTextEl?.textContent?.trim() || "";
//   const doorstepImageElement = doorstepImageEl.querySelector("img");
//   const doorstepImage = doorstepImageElement?.getAttribute("src")?.trim() || "";
//   const doorstepText = doorstepTextEl?.textContent?.trim() || "";

//   const selectDate = selectDateEl?.textContent?.trim() || "";
//   const advanceText = advanceTextEl?.textContent?.trim() || "";

//   const nameText = nameTextEl?.textContent?.trim() || "";
//   const email = emailEl?.textContent?.trim() || "";
//   const mobile = mobileEl?.textContent?.trim() || "";
//   const otp = otpEl?.textContent?.trim() || "";
//   const agree = agreeEl?.textContent?.trim() || "";
//   const submit = submitEl?.textContent?.trim() || "";
//   const anotherTestdrive = anotherTestdriveEl?.textContent?.trim() || "";
//   const conformText = conformTextEl?.textContent?.trim() || "";

//   const bookdriveHtml = `
//       <h1>Please Enter Your Details</h1>
//       <h6>Select City</h6>
//       <h6>Car Model</h6>
//       <h3>Select Transmission</h3>
//       <div>
//         <img src="path-to-manual-image" alt="Manual Transmission">
//         <h2>Manual</h2>
//       </div>
//       <div>
//         <img src="path-to-automatic-image" alt="Automatic Transmission">
//         <h2>Automatic</h2>
//       </div>
//       <h3>Test Drive</h3>
//       <div>
//         <img src="path-to-showroom-image" alt="Showroom">
//         <h2>Showroom</h2>
//       </div>
//       <div>
//         <img src="path-to-doorstep-image" alt="Doorstep">
//         <h2>Doorstep</h2>
//       </div>
//       <h6>Select Date</h6>
//       <p>Date and slot can be booked 12 hours in advance.</p>
//       <h3>name</h3>
//       <h3>email</h3>
//       <h3>mobile</h3>
//       <h3>otp</h3>
//       <button>Submit</button>
//   `;

//   block.innerHTML = bookdriveHtml;
// }
