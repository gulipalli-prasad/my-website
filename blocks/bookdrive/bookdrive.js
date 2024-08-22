// export default function decorate(block) {
//   const [
//     formHeadingEl,
//     cityLabelEl,
//     carModelEl,
//     transmissionTextEl,
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
//     conformtextEl,
//     anotherTestdriveEl,
//     submitEl,
//   ] = block.children;

//   const formHeading = formHeadingEl?.textContent?.trim() || "";
//   const cityLabel = cityLabelEl?.textContent?.trim() || "";
//   const carModel = carModelEl?.textContent?.trim() || "";
//   const transmissionText = transmissionTextEl?.textContent?.trim() || "";
//   const manualImageElement = manualImageEl?.querySelector("img");
//   const manualImage = manualImageElement?.getAttribute("src")?.trim() || "";
//   const manualText = manualTextEl?.textContent?.trim() || "Manual";
//   const automaticImageElement = automaticImageEl?.querySelector("img");
//   const automaticImage =
//     automaticImageElement?.getAttribute("src")?.trim() || "";
//   const automaticText = automaticTextEl?.textContent?.trim() || "";
//   const testdriveText = testdriveTextEl?.textContent?.trim() || "";
//   const showroomImageElement = showroomImageEl?.querySelector("img");
//   const showroomImage = showroomImageElement?.getAttribute("src")?.trim() || "";
//   const showroomText = showroomTextEl?.textContent?.trim() || "Showroom";
//   const doorstepImageElement = doorstepImageEl?.querySelector("img");
//   const doorstepImage = doorstepImageElement?.getAttribute("src")?.trim() || "";
//   const doorstepText = doorstepTextEl?.textContent?.trim() || "";
//   const selectdateText = selectdateTextEl?.textContent?.trim() || "";
//   const advanceText = advanceTextEl?.textContent?.trim() || "";
//   const nameText = nameTextEl?.textContent?.trim() || "";
//   const emailText = emailEl?.textContent?.trim() || "";
//   const mobileText = mobileEl?.textContent?.trim() || "";
//   const otpText = otpEl?.textContent?.trim() || "";
//   const agreeText = agreeEl?.textContent?.trim() || "";
//   const conformtext = conformtextEl?.textContent?.trim() || "";
//   const anotherTestdriveText = anotherTestdriveEl?.textContent?.trim() || "";
//   const submit = submitEl?.textContent?.trim() || "";

//   // Clear the block to ensure it's empty before adding content
//   block.innerHTML = "";

//   // Create and append the title
//   const title = document.createElement("h1");
//   title.textContent = formHeading;
//   block.appendChild(title);

//   // Create and append the Select City section
//   const selectCity = document.createElement("h6");
//   selectCity.textContent = cityLabel;
//   block.appendChild(selectCity);

//   // Create and append the Car Model section
//   const carModelSection = document.createElement("h6");
//   carModelSection.textContent = carModel;
//   block.appendChild(carModelSection);

//   // Create and append the Select Transmission section
//   const transmissionSection = document.createElement("h3");
//   transmissionSection.textContent = transmissionText;
//   block.appendChild(transmissionSection);

//   // Transmission: Manual
//   const manualDiv = document.createElement("div");
//   const manualImg = document.createElement("img");
//   manualImg.src = manualImage;
//   manualImg.alt = "Manual Transmission";
//   const manualTextElement = document.createElement("h2");
//   manualTextElement.textContent = manualText;
//   manualDiv.appendChild(manualImg);
//   manualDiv.appendChild(manualTextElement);
//   block.appendChild(manualDiv);

//   // Transmission: Automatic
//   const automaticDiv = document.createElement("div");
//   const automaticImg = document.createElement("img");
//   automaticImg.src = automaticImage;
//   automaticImg.alt = "Automatic Transmission";
//   const automaticTextElement = document.createElement("h2");
//   automaticTextElement.textContent = automaticText;
//   automaticDiv.appendChild(automaticImg);
//   automaticDiv.appendChild(automaticTextElement);
//   block.appendChild(automaticDiv);

//   // Create and append the Test Drive section
//   const testDriveSection = document.createElement("h3");
//   testDriveSection.textContent = testdriveText;
//   block.appendChild(testDriveSection);

//   // Test Drive: Showroom
//   const showroomDiv = document.createElement("div");
//   const showroomImg = document.createElement("img");
//   showroomImg.src = showroomImage;
//   showroomImg.alt = "Showroom";
//   const showroomTextElement = document.createElement("h2");
//   showroomTextElement.textContent = showroomText;
//   showroomDiv.appendChild(showroomImg);
//   showroomDiv.appendChild(showroomTextElement);
//   block.appendChild(showroomDiv);

//   // Test Drive: Doorstep
//   const doorstepDiv = document.createElement("div");
//   const doorstepImg = document.createElement("img");
//   doorstepImg.src = doorstepImage;
//   doorstepImg.alt = "Doorstep";
//   const doorstepTextElement = document.createElement("h2");
//   doorstepTextElement.textContent = doorstepText;
//   doorstepDiv.appendChild(doorstepImg);
//   doorstepDiv.appendChild(doorstepTextElement);
//   block.appendChild(doorstepDiv);

//   // Create and append the Select Date section
//   const selectDateSection = document.createElement("h6");
//   selectDateSection.textContent = selectdateText;
//   block.appendChild(selectDateSection);

//   // Create and append the notice paragraph
//   const noticeParagraph = document.createElement("p");
//   noticeParagraph.textContent = advanceText;
//   block.appendChild(noticeParagraph);

//   // Create and append the input fields for Name, Email, Mobile, and OTP
//   const nameField = document.createElement("h3");
//   nameField.textContent = nameText;
//   block.appendChild(nameField);

//   const emailField = document.createElement("h3");
//   emailField.textContent = emailText;
//   block.appendChild(emailField);

//   const mobileField = document.createElement("h3");
//   mobileField.textContent = mobileText;
//   block.appendChild(mobileField);

//   const otpField = document.createElement("h3");
//   otpField.textContent = otpText;
//   block.appendChild(otpField);

//   // Create and append the agreement and confirmation text
//   const agreeParagraph = document.createElement("p");
//   agreeParagraph.textContent = agreeText;
//   block.appendChild(agreeParagraph);

//   const confirmParagraph = document.createElement("p");
//   confirmParagraph.textContent = conformtext;
//   block.appendChild(confirmParagraph);

//   // Create and append the "Add Another Test Drive" section
//   const anotherTestDriveSection = document.createElement("h3");
//   anotherTestDriveSection.textContent = anotherTestdriveText;
//   block.appendChild(anotherTestDriveSection);

//   // Create and append the submit button
//   const submitButton = document.createElement("button");
//   submitButton.textContent = submit;
//   block.appendChild(submitButton);
// }
