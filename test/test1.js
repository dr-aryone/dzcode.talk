// const name = prompt('c quoi votre prénom?');
// alert('bonjour ' + name);

// const x = prompt('donner nbr');
// const y = prompt('donner nbr 2 ');
// alert(parseInt(x) + parseInt(y));

// const a = prompt('entrer premier Nombre');
// const b = prompt('entrer deuxieme Nombre');
// const c = parseInt(a) + parseInt(b);
// document.write(`${a}+${b}=${c}`);

// let age = prompt('donner votre age');
// if (parseInt(age) < 5 || parseInt(age) > 100) {
//   alert('age eroné');
//   age = prompt('donner votre age');
// }

const n = prompt('donner un nbr');
let s = 0;
for (let i = 2; i <= parseInt(n); i++) {
  if (parseInt(n) % i === 0) {
    s++;
  }
  if (s === 2) {
    document.write(`CE NOMBRE EST PREMIER`);
    break;
  }
}
