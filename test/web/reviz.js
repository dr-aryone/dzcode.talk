const champs = Number(document.formx.champS.value);
let a, b, op;
const X = Number(document.querySelector('rect').getAttribute('x'));
const Y = Number(document.querySelector('rect').getAttribute('y'));
const R = Number(document.querySelector('circle').getAttribute('r'));

function operation(x) {
  a = champs;
  op = x;
  document.formx.champS.value = 0;
  document.formx.champS.focus();
}
function resultat() {
  b = champs;
  let c;
  switch (op) {
    case '+':
      c = Number(a) + Number(b);
      break;
    case '-':
      c = Number(a) - Number(b);
      break;
    case '*':
      c = Number(a) * Number(b);
      break;
    default:
      break;
  }
  document.formx.champS.value = c;
}
function move(x, y) {
  document.querySelector('rect').setAttribute('x', X + x);
  document.querySelector('rect').setAttribute('y', Y + y);
}
function resize(r) {
  document.querySelector('circle').setAttribute('r', R + r);
}
function moveByKey(event) {
  const keyCode = event.keyCode;
  switch (keyCode) {
    case 37:
      move(5, 10);
      break;
    case 38:
      move(5, -10);
      break;
    case 39:
      move(-5, 10);
      break;
    case 40:
      move(-5, -10);
      break;
    default:
      break;
  }
}
