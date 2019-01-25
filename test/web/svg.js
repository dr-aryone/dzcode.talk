const str = document.querySelector('rect');
let width = parseInt(str.getAttribute('width'));
let height = parseInt(str.getAttribute('height'));

// console.log(val);

function maximiser() {
  str.setAttribute('width', (width += 10).toString());
  str.setAttribute('height', (height += 10).toString());
}

function minimiser() {
  str.setAttribute('width', (width -= 10).toString());
  str.setAttribute('height', (height -= 10).toString());
}
