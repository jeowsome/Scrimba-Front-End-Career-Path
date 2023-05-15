import { catsData } from "./data.js";

const emotionRadiosEl = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");
const memeModalEl = document.getElementById("meme-modal");
const memeModaInnerlEl = document.getElementById("meme-modal-inner");
const memeModalCloseBtn = document.getElementById("meme-modal-close-btn");

function getEmotionsArray(cats) {
  const emotionsArray = [];
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      if (!emotionsArray.includes(emotion)) {
        emotionsArray.push(emotion);
      }
    }
  }
  return emotionsArray;
}

function renderEmotionsRadios(cats) {
  let emotionsString = "";
  const emotions = getEmotionsArray(cats);
  for (let emotion of emotions) {
    emotionsString += `
    <div class="radio">
        <input type="radio" id="${emotion}" name="emotion" value="${emotion}">
        <label for="${emotion}">${emotion}</label>
    </div>
    `;
  }
  emotionRadiosEl.innerHTML = emotionsString;
}

function getMatchingCatsArray() {
  const selected = document.querySelector('input[type="radio"]:checked');
  const onlyGif = document.getElementById("gifs-only-option");
  if (selected) {
    return catsData.filter((cat) =>
      onlyGif.checked
        ? cat.emotionTags.includes(selected.value) && cat.isGif
        : cat.emotionTags.includes(selected.value)
    );
  }
}

function getSingleCat() {
  const catsArray = getMatchingCatsArray();

  return catsArray[Math.floor(Math.random * catsArray.length || 0)];
}

function renderCat() {
  const { image, alt } = getSingleCat();
  memeModalEl.style.display = "flex";
  memeModaInnerlEl.innerHTML = `<img 
  class="cat-img" 
  src="./images/${image}"
  alt="${alt}"
  >`;
}

emotionRadiosEl.onchange = (e) => {
  const radioArray = document.getElementsByClassName("radio");

  for (let radio of radioArray) {
    radio.classList.remove("highlight");
  }
  e.target.parentElement.classList.add("highlight");
};

renderEmotionsRadios(catsData);
getImageBtn.onclick = (e) => renderCat();
memeModalCloseBtn.onclick = () => {
  memeModalEl.style.display = "none";
};
