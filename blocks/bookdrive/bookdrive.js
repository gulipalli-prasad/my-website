// export default function decorate(block) {
//   const [
//     formHeadingEl,
//     cityLabelEl,
//     carModelEl,
//     transmissionEl,
//     manualImageEl,
//     manualEl,
//     automaticImageEl,
//     automaticEl,
//     testdriveTextEl,
//     showroomImageEl,
//     showroomEl,
//     doorstepImageEl,
//     doorstepEl,
//     selectedDateEl,
//     advanceEl,
//     nameContextEl,
//     emailEl,
//     mobileEl,
//     otpEl,
//     agreeEl,
//     conformtextEl,
//     anotherTestdriveEl,
//     submitEl,
//   ] = block.children;

//   const formHeading = formHeadingEl?.textContent?.trim() || "";
//   const cityLabel = cityLabelEl?.textContent?.trim() || "";
//   const carModel = carModelEl?.textContent?.trim() || "";
//   const transmission = transmissionEl?.textContent?.trim() || "";
//   const manualImageElement = manualImageEl?.querySelector("img");
//   const manualImage = manualImageElement?.getAttribute("src")?.trim() || "";
//   const manual = manualEl?.textContent?.trim() || "";
//   const automaticImageElement = automaticImageEl?.querySelector("img");
//   const automaticImage =
//     automaticImageElement?.getAttribute("src")?.trim() || "";
//   const automatic = automaticEl?.textContent?.trim() || "";
//   const testdriveText = testdriveTextEl?.textContent?.trim() || "";
//   const showroomImageElement = showroomImageEl?.querySelector("img");
//   const showroomImage = showroomImageElement?.getAttribute("src")?.trim() || "";
//   const showroom = showroomEl?.textContent?.trim() || "";
//   const doorstepImageElement = doorstepImageEl?.querySelector("img");
//   const doorstepImage = doorstepImageElement?.getAttribute("src")?.trim() || "";
//   const doorstep = doorstepEl?.textContent?.trim() || "";
//   const selectedDate = selectedDateEl?.textContent?.trim() || "";
//   const advance = advanceEl?.textContent?.trim() || "";
//   const nameContext = nameContextEl?.textContent?.trim() || "";
//   const email = emailEl?.textContent?.trim() || "";
//   const mobile = mobileEl?.textContent?.trim() || "";
//   const otp = otpEl?.textContent?.trim() || "";
//   const agree = agreeEl?.textContent?.trim() || "";
//   const conformtext = conformtextEl?.textContent?.trim() || "";
//   const anotherTestdriveText = anotherTestdriveEl?.textContent?.trim() || "";
//   const submit = submitEl?.textContent?.trim() || "";

//   block.innerHTML = `
//   <div>
//     <h1>${formHeading}</h1>
//     <h6>${cityLabel}</h6>
//     <h6>${carModel}</h6>
//     <h3>${transmission}</h3>
//     <div>
//       <img src="${manualImage}" alt="Manual Transmission">
//       <h2>${manual}</h2>
//     </div>
//     <div>
//       <img src="${automaticImage}" alt="Automatic Transmission">
//       <h2>${automatic}</h2>
//     </div>
//     <h3>${testdriveText}</h3>
//     <div>
//       <img src="${showroomImage}" alt="Showroom">
//       <h2>${showroom}</h2>
//     </div>
//     <div>
//       <img src="${doorstepImage}" alt="Doorstep">
//       <h2>${doorstep}</h2>
//     </div>
//     <h6>${selectedDate}</h6>
//     <p>${advance}</p>
// </div>
// <div>
//     <h3>${nameContext}</h3>
//     <h3>${email}</h3>
//     <h3>${mobile}</h3>
//     <h3>${otp}</h3>
//     <p>${agree}</p>
//     <p>${conformtext}</p>
//     <h3>${anotherTestdriveText}</h3>
//     <button>${submit}</button>
// </div>

//   `;
// }
