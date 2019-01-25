const form = document.forms[0];
const check1 = form.check1[0].value;
const verif1 = form.confirm1[0].value;
const check2 = form.check2[0].value;
const verif2 = form.confirm2[0].value;

form.addEventListener('submit', () => {
  if (check1 !== verif1 || check2 !== verif2) {
    alert('svp resaisir');
    return false;
  }
});

/* les nombres premiers de 1 a 100 */
document.write('<h3> les nombres premiers :');
for (let i = 2; i < 100; i++) {
  let somme = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) somme++;
  }
  if (somme === 2) document.write(`${i} `);
}

/* tableau de multiplication */
document.write('</h3><hr><p> le tableau de multiplication : </p>');

document.write('<table border="1" cellspacing="8" width="500px"><tbody>');
for (let i = 1; i < 10; i++) {
  document.write('<tr>');
  for (let j = 1; j < 11; j++) {
    document.write(` <td> ${i * j} </td> `);
  }
  document.write('</tr>');
}
document.write('</tbody"></table><br><hr>');

/* la fonction bienvenue qui afficher bienvenue dans la charge de la page */
function bienvenue() {
  alert('bienvenue');
}

/* afficher un msg quand la souris est sur le lien important */

document.querySelector('a').addEventListener('mouseover', afficher);

function afficher() {
  alert('bravo');
}

// const name = prompt('c quoi votre prenom?','taper ici');
// alert('bonjour ' + name);

/*
// la somme de 2 nbr demender en saisie et afficher dans le body
 const a = prompt('entrer premier Nombre');
 const b = prompt('entrer deuxieme Nombre');
 const c = parseInt(a) + parseInt(b);
 document.write(`${a}+${b}=${c}`);

*/

/*
// verifier si lage est valide sinon redemender la saisie

let age = prompt('donner votre age');
while (parseInt(age) < 5 || parseInt(age) > 100) {
   alert('age eroné');
   age = prompt('donner votre age');
 }
*/

/*
// verifier si le nombre entrer est premier
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
*/
