const modalEl = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalTextEl = document.getElementById("modal-text");
const modalInnerEl = document.getElementById("modal-inner");
const modalBtnsContainer = document.getElementById("modal-choice-btns");
const consentFormEl = document.getElementById("consent-form");
const declineBtn = document.getElementById("decline-btn");

const replaceInner = (name) => {
  setTimeout(() => {
    modalInnerEl.innerHTML = `<h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
          <p>We just sold the rights to your eternal soul.</p>
          <div class="idiot-gif">
              <img src="images/laugh.gif">
          </div>
          `;
  }, 1500);
  modalCloseBtn.disabled = false;
};
const makeSale = (name) => {
  setTimeout(() => {
    const uploadTextEl = document.getElementById("uploadText");
    uploadTextEl.textContent = "Making the sale...";
    replaceInner(name);
  }, 1500);
};
modalCloseBtn.disabled = true;
setTimeout(() => (modalEl.style.display = "inline"), 1500);
modalCloseBtn.onclick = () => (modalEl.style.display = "none");
declineBtn.onmouseenter = () => modalBtnsContainer.classList.toggle("reverse");
consentFormEl.onsubmit = (e) => {
  e.preventDefault();
  const consentFormData = new FormData(consentFormEl);
  modalTextEl.innerHTML = `<div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div>`;
  makeSale(consentFormData.get("userFullName"));
};
