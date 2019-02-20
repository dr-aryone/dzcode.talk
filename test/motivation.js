// import Unsplash from "unsplash-js";
// const Unsplash = require("unsplash-js").default;

const apiKey = "45f7a5210c9a4f2bcba7438ea1d65f3c959502f211011ab634276f7d034fe32d";
const grid = document.getElementById("grid");
const imageContent = document.getElementById("image-content");
const imageQuote = document.getElementById("image-quote");

const div = document.getElementById("unsplash");
if (div) {
  div.addEventListener("click", () => {
    fetch(`https://api.unsplash.com/search/photos?query=chicago&per_page=50&client_id=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        data = data.results;
        let output = "";
        data.forEach(image => {
          if (image.width > image.height) {
            output = `<div class="image"><img src="${image.urls.regular}"></div>`;
            document.querySelector(".grid").innerHTML += output;
          }
        });
      });
  });
}
