const apiKey = "45f7a5210c9a4f2bcba7438ea1d65f3c959502f211011ab634276f7d034fe32d";
const imageContent = document.querySelector(".image-content");

/* the async await way : we fetch random images (max count is 30) */

const getImages = async () => {
  try {
    // we fetch firstly the response(the url of the api with their api key) then the data
    const response = await fetch(
      // `https://api.unsplash.com/photos/random?count=28&client_id=${apiKey}`
      `https://api.unsplash.com/collections/3732249?random&per_page=44&client_id=${apiKey}`
    );
    // the data is a json formated
    const data = await response.json();
    // results contain the data of images its a specific data go check console.log(data)
    let output = "";
    data.forEach(image => {
      output = `<img src="${image.cover_photo.urls.regular}">`;
      imageContent.innerHTML += output;
    });
  } catch (err) {
    throw new Error(`${err}`);
  }
};

// run the function when the window loads
if (window) {
  window.addEventListener("load", getImages);
}

/* the pormises way : we fetch specific search results */

// if (div) {
//   div.addEventListener("click", () => {
//     fetch(`https://api.unsplash.com/search/photos?query=chicago&per_page=50&client_id=${apiKey}`)
//       .then(response => response.json())
//       .then(data => {
//         data = data.results;
//         let output = "";
//         data.forEach(image => {
//           if (image.width > image.height) {
//             output = `<img src="${image.urls.regular}">`;
//             imageContent.innerHTML += output;
//           }
//         });
//       })
//        .catch(err => {
//          console.error(`${err}`);
//        })
//   });
// }
