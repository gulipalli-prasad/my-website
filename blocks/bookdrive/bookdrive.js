export default function decorate(block) {
  const textNodes = Array.from(block.children)
    .map((el) => el.textContent?.trim() || "")
    .filter((text) => text.length > 0);

  console.log("Filtered Text Nodes:", textNodes);

  const [
    formHeading = "",
    cityLabel = "",
    carModel = "",
    transmission = "",
    manual = "",
    automatic = "",
    testdriveTxt = "",
    showroom = "",
    doorstep = "",
    selectedDate = "",
    advance = "",
    nameContext = "",
    email = "",
    mobile = "",
    otp = "",
    agree = "",
    conformtext = "",
    anotherTestdriveText = "",
    submit = "",
  ] = textNodes;

  const images = Array.from(block.querySelectorAll("img"));
  console.log("my images are: " + images);

  const manualImage = images[0]?.getAttribute("src")?.trim() || "";
  const automaticImage = images[1]?.getAttribute("src")?.trim() || "";
  const showroomImage = images[2]?.getAttribute("src")?.trim() || "";
  const doorstepImage = images[3]?.getAttribute("src")?.trim() || "";

  console.log("Manual Image Src:", manualImage);
  console.log("Automatic Image Src:", automaticImage);
  console.log("Showroom Image Src:", showroomImage);
  console.log("Doorstep Image Src:", doorstepImage);

  const bookHTML = `
    <h1 class="form-heading">${formHeading}</h1>
    <h6 class="city-label">${cityLabel}</h6>
    <h6 class="car-model">${carModel}</h6>
    <h3 class="transmission-text">${transmission}</h3>
    <img class="manual-image" src="${manualImage}" alt="Manual Transmission Image">
    <h3 class="manual-text">${manual}</h3>
    <img class="automatic-image" src="${automaticImage}" alt="Automatic Transmission Image">
    <h3 class="automatic-text">${automatic}</h3>
    <h3 class="testdrive-text">${testdriveTxt}</h3>
    <img class="showroom-image" src="${showroomImage}" alt="Showroom Image">
    <h3 class="showroom-text">${showroom}</h3>
    <img class="doorstep-image" src="${doorstepImage}" alt="Doorstep Image">
    <h3 class="doorstep-text">${doorstep}</h3>
    <h6 class="selectdate-text">${selectedDate}</h6>
    <p class="advance-text">${advance}</p>
    <h3 class="name-text">${nameContext}</h3>
    <h3 class="email-text">${email}</h3>
    <h3 class="mobile-text">${mobile}</h3>
    <h3 class="otp-text">${otp}</h3>
    <p class="agree-text">${agree}</p>
    <p class="conform-text">${conformtext}</p>
    <h3 class="another-testdrive-text">${anotherTestdriveText}</h3>
    <button class="submit-button" type="button" onclick="alert('Do you want to submit!')">${submit}</button>
  `;

  block.innerHTML = bookHTML;
}
