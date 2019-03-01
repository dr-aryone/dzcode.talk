const slides = {
  amine: 1,
  hammou: 4,
  mino: 4
};
const age = [4, 5, 6, 9, 0, -4, 25, 14, 78, 100];
const ranking = age.sort((a, b) => a - b);
const ArangeSlides = slides.filter(slides.amine);

console.log(ranking);
