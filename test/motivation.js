const apiKey = "45f7a5210c9a4f2bcba7438ea1d65f3c959502f211011ab634276f7d034fe32d";
const grid = document.getElementById("grid");
const div = document.getElementById("unsplash");
const imageContent = document.getElementById("image-content");
const imageQuote = document.getElementById("image-quote");

/* the pormises way */

// if (div) {
//   div.addEventListener("click", () => {
//     fetch(`https://api.unsplash.com/search/photos?query=chicago&per_page=50&client_id=${apiKey}`)
//       .then(response => response.json())
//       .then(data => {
//         data = data.results;
//         let output = "";
//         data.forEach(image => {
//           if (image.width > image.height) {
//             output = `<div class="image"><img src="${image.urls.regular}"></div>`;
//             document.querySelector(".grid").innerHTML += output;
//           }
//         });
//       })
//        .catch(err => {
//      console.log(err);
//        })
//   });
// }

/* the async await way */

const getImages = async () => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=chicago&per_page=50&client_id=${apiKey}`
    );
    const data = await response.json();
    const dataResults = data.results;
    let output = "";
    dataResults.forEach(image => {
      if (image.width > image.height) {
        output = `<div class="image"><img src="${image.urls.regular}"></div>`;
        grid.innerHTML += output;
      }
    });
  } catch (err) {
    throw new Error(` your data is corrupted ${err}`);
  }
};

if (div) {
  div.addEventListener("click", getImages);
}
