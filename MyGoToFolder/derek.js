/*
Some functions and some things down here are just for education only i know there are some deprecated
functions and methods.

Security tip (from eslint & jshint) :
* I want to say that you should use console.log to check your variables and loops etc...
* don't use document.write(can be a form of eval) and alerts prompts ...
*  console logs also are just for  checking verifiying and debugging code dont keep'em there.

the difference between using var let const :
var is global variable that is used in the whole program so you better avoid it
const is a constant so you use it to variables that are fixed and you dont want to change their values
let is for block level which means you can put inside of a function a loop etc.. and also it is used
for varaibles that you want to change or reasign their values.

also if you want to call function events always use an eventlistner dont put the name of the function
in the html and just write directly here it is not recommanded

for in & for of notew:
* for..in loops iterate over the entire prototype chain, which is virtually never what you want,
* Use Object.{keys,values,entries}, and iterate over the resulting array.

* The body of a for-in should be wrapped in an if statement to filter unwanted properties from the prototype.

* iterators/generators require regenerator-runtime, which is too heavyweight for this guide
*.to allow them. Separately, loops should be avoided in favor of array iterations.

variables should always be declared in the top of the script
*/
const escapedChars = '" \' \\ \t \n';
const lastName = 'hammou';
const firstName = `Amine ${lastName}`;
let vehicules = { amine: 'cat', hammou: 'dog', kacem: 'mouse' };
const arr = [3, 4, 6, 2, 1, 5];
// const multiArray = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]];
const state = 'blida';
// conditional operator (x) ? y : z
// condition is x if true ? do this : else do this
const testConditional = 4 < 10 ? '4 is less' : '4 is big';

let keyClicked = 0;
let mouseX = 0;
let mouseY = 0;
// we did a funcrion downthere that logs all the mouvement of the mouse and keys so we will change
// the default attitude of these special functions to reasign them those collected values
document.onkeypress = keyPressed;
document.onmousemove = mousePos;
document.onmousedown = mouseClicked;

document.write(`${escapedChars} the length is ${escapedChars.length}`);
document.write(`<br>${firstName.substring(6, firstName.length)}`);
document.write(` <br> index of ${lastName.charAt(4)} is ${lastName.indexOf('o')}`);
document.write(`<br> testing with the conditional op ${testConditional}<br>`);

// switch statement
switch (state) {
  case 'affroun':
    document.write('wrong <br>');
    break;
  default:
    document.write('default option <br>');
    break;
}
let num = 1;
while (num < 10) {
  if (num === 4) {
    break;
    // break get out of the loop while completely without coming back
  }
  num++;
  continue;
  // continue get out of everything except the loop it will ignore what is down and get back from the while start
}

/* arrays, numbers & strings functions */
/*
number : convert the element to a number (integer)
parseInt : convert the element to an integer
String : change the element to a string
toFixed : shorten a float to a fixed integer
typeof : returns the datatype of the element
Boolean : false(0 or Nan : not a number) , true

min,max,charAt,indexOf, Math.random().

string.replace("Omar","amin");  // changing the given string in the 1st parm by the 2cd param
string.trim(); // delete trim spaces from the start to the end
array.push("racha"); // insert this item at the end of the array

string.split(separator, limit) : lastName.split("/",2) split the string to words with / separting
them and only take the 2 first elements only

array.reverse(); // Returns the array reversed
array.sort(); // Returns the array sorted
array.concat(arr2); // Join 2 arrays
array.join(" "); // Converts array into a string and split the words with a space
array.slice(0,2); // Returns part of an array same functionalty of substring

array.splice(startIndex, howManyItemsUwantToDelete,replacableitem1,replacableitem2...) :
can delete & insert items in an array

array.splice(0,3); // remove items(splice) from the index 0 the 3 next elements

array.splice(0,3,9,10,11); // this will replace the 3 elements from the start
with the rest of the elements given after

*/

// it will sort the array from 1 2 3 4 5 6 and then it will log out the elements that were deleted
console.log(`we deleted these ${arr.sort().splice(0, 3)} the new array is ${arr}`);
// so now we will work with the new arary 4 5 6 and then we will log out the items we wanna replace
console.log(`we will replace these ${arr.splice(0, 3, 9, 10, 11)} the new array is ${arr}`);

/* for in & for of */
document.write('<br> for in loop down here <br>');

// for in iterates the key or the indice of the element not the value so i here represents amine , hammou , kacem
for (const i in vehicules) {
  document.write(`<br> the key is ${i} & the value is ${vehicules[i]} <br>`);
}
document.write('<br> second exemple for in <br>');
// for in iterates the key or the indice of the element not the value so i here represents 0,1,2 etc...
for (const i in arr) {
  document.write(`<br> the index of the array ${i} & its real value ${arr[i]} <br>`);
}

document.write('<br> for of loop down here <br>');

// for of iterates the value of the element so i here represents the real value of arr not the indice
for (const i of arr) {
  document.write(`<br> th value of a simple array ${i} <br>`);
}

document.write('<br> second exemple for of <br>');
// there is a trick in a for of of an array of key value is that of you iterate it just like the 1st expl
// it wont work so in this case you need a heigher order function (es6) called map to create a key value array
// that for of can iterate and here is how to do that

vehicules = new Map([['1', 'foo'], ['2', 'shoot']]);
// with this for of will give you the key and the value both
for (const i of vehicules) {
  document.write(`<br> the key with the value is ${i} <br> `);
}
// if we want to get deeper with it so that we wanna precise the key alone or the value alone we do this
for (const [key, value] of vehicules) {
  document.write(`<br> the key is ${key} & the value is ${value} <br> `);
}

// events
/*
    ondblclick : ondblclick
    onmouseover : mousehover
    onmouseout : mouse leave
    onresize : when u resize the browser
    onload : when the page loads
    onBlur : when u get out of the element
    onFocus : when u r in the element (using it)
    onChange : if you changed the default behavior of the element selected it will work
    OnAbort - Called when a page load is interrupted
    OnError - Called when an error occurs during page load
    OnKeyDown - When key is pressed but not released
    OnKeyUp - When key is released
    OnMouseUp - When mouse button is released
    OnReset - When reset button is clicked
    OnSelect - When text is selected
    OnSubmit - When submit button is clicked
    OnUnload - When user leaves a page
    */

/* mouse keyboard position and clicked value trick */

// here we are testing if the browser is internet explorer
const mie = navigator.appName === 'Microsoft Internet Explorer';
if (!mie) {
  // Specifies that you want all mouse movement events passed to the document
  document.captureEvents(Event.MOUSEMOVE);
  document.captureEvents(Event.MOUSEDOWN);
}

function mousePos(e) {
  if (!mie) {
    // here we assing the x,y mouvement of the mouse in the page we are in
    mouseX = e.pageX;
    mouseY = e.pageY;
  }
  // and then we target the form with its name and then the input of the mouse and modify its value
  document.formx.formMouseX.value = mouseX;
  document.formx.formMouseY.value = mouseY;
  return true;
}
// event.which returns 1 2 for the clicked mouse event (left ,right)
// event.charCode returns the charCode of the keyboard so we need to convert it to a real letter
function keyPressed(e) {
  if (!mie) {
    keyClicked = String.fromCharCode(e.charCode); // Converts char code to character
  }
  if (keyClicked) {
    document.formx.formKeyboardPress.value = keyClicked;
    return true;
  }
  return false;
}

function mouseClicked(e) {
  if (!mie) {
    switch (e.which) {
      case 1:
        document.formx.formMousePress.value = 'Left';
        break;
      case 2:
        document.formx.formMousePress.value = 'Middle';
        break;
      default:
        document.formx.formMousePress.value = 'Right';
        break;
    }
    return true;
  }
}

// what the function is doing is that first it changes the visibility of the paragraphe whethere
// is hidding or visible conditonaly through checking the checkbox
// if its checked or not with the conditional operator
function showFirstPar() {
  document.querySelector('p').style.visibility = document.formx.check1.checked
    ? 'visible'
    : 'hidden';
}
// change the text of h3 by using the firstchild
// and the only child of h3 is the text and the text itself is the nodevalue
function changenode() {
  document.querySelector('h3').firstChild.nodeValue = 'you are over me';
}
// changing the inner html meaning the the html of the text inside the h3 and concatinating it with +=
function changehtml() {
  document.querySelector('h3').innerHTML += ' and goodbye world';
}
/* DOM :
innerHTML its a complete tag "<p>ccc</p>"" while textContent its the object of the tag the corp "ccc" ,
oncontextmenu when you enter into input

lets say we have this <div> <p>x<p> <br> <i>y</i> </div>

parentNode : the parent element here is the div if we dont have nothing then it is the body
firstChild : p , lastChild : i, childNodes[0 - n] : p br (which means even the spaces are counted) i ,removeChild
nextElementSibling,previousElementSibling
insertBefore(beforethis, insertThis), insertAfter(afterthis, insertThis)
nodeValue,
createElement,createTextNode => appendChild : when we create an element to make him alive in the page we append

alert(img[0].src);  : quick tip alert of the value of the source

lien[0].setAttribute('href', 'https://www.facebook.com'); : modify a certain attribut
lien[0].getAttribute('href'); : to get the value of a specific attribut


e.preventDefault() :

it tells the browser that if there is a default behavior for this event on this object, then skip that default behavior.

So, for example, if you had a submit button that the default
behavior was to submit a form and you had a click handler on that button that did a preventDefault(),
then the browser would not submit the form when the button was clicked.
 A classic use of this might be when the form doesn't validate so you show the user an error message
and don't want the form to be submitted to the server.

Or another example. If you set up a click handler for a link and you call e.preventDefault()
in that click handler, then the browser will not process the click on the link and will not follow the href in the link.

setTimeout  : setTimeout(function(){	d.style.backgroundColor="red"; },500);
setInterval , ClearInterval  :   setInterval : x=setInterval(fonctionx,1000);  , clearInterval(x);

*/
document.querySelector('div').addEventListener('click', nodeFunction());
function nodeFunction() {
  const div = document.querySelector('div');
  const hr = document.createElement('hr');
  const text = document.createTextNode('here is a last text added xd');
  div.firstChild.nodeValue = 'hello world im the div itself';
  // for some reason childnodes.value will not let
  // you change the original value so you have to remove the original child and then use it
  div.removeChild(div.childNodes[1]);
  div.childNodes[1].nodeValue = ' hello world im the new bold ';
  div.removeChild(div.childNodes[2]);
  div.removeChild(div.lastChild);
  div.appendChild(text);
  div.appendChild(hr);
}

/* OOP */

// constructor
function Animal() {
  this.name = 'start name';
  this.sound = 'grrr';
  this.owner = 'start owner';
}
// set a method that the animal class will always use and its called a prototype

Animal.prototype.setOwner = function(newOwner) {
  // we are checking of the variable newowner if it is not undefined then we assign it to this.owner
  // its called a setter
  return typeof newOwner !== 'undefined'
    ? (this.owner = newOwner)
    : alert('please enter a valid owner');
};
// same thing for the getter
Animal.prototype.getOwner = function() {
  return this.owner;
};
// what encapsulation means is that to access any // attribute in the constructor u have to acces
// them through the setters and getters

const Dog = new Animal();
Dog.setOwner('hammou');
document.write(`${Dog.getOwner()} <br>`);

// inheritance is adding subclass cat that inherit the same attrbts and methods from the superclass animal

function Cat() {
  // animal calls this of the cat to add it as a subclass
  Animal.call(this);
  this.mode = 'happy';
}
// then this is to let cat knows that the superclass is Animal
Cat.prototype = new Animal();

// then we need to create the constructor of the class cat just like this
Cat.prototype.constructor = Cat();

// after this u can add setters and getters for car

const sophie = new Cat();
const instance = sophie instanceof Cat;
document.write(instance);

// method overloading : create methods inside of methods and add 2 3 more attributs to overload it
/*
  Cat.prototype.setStuff = function(newName, newOwner, newMode) {
    if (
      typeof newName !== 'undefined' &&
      typeof newOwner !== 'undefined' &&
      typeof newMode !== 'undefined'
    ) {
      Cat.prototype.setStuff = function(newName, newOwner, newMode) {};
    }
  };
*/

// polymorphisme
/*
function DoAnimalStuff (Animal){
  document.write(Animal.getOwner());
}
function DoAnimalStuff (Cat){
  document.write(Cat.getOwner());
}
*/
