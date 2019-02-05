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
const mie = navigator.appName === 'Microsoft Internet Explorer';
if (!mie) {
  // Specifies that you want all mouse movement events passed to the document
  document.captureEvents(Event.MOUSEMOVE);
  document.captureEvents(Event.MOUSEDOWN);
}
document.onkeypress = keyPressed;
document.onmousemove = mousePos;
document.onmousedown = mouseClicked;
const mouseClick = 0;
let keyClicked = 0;
let mouseX = 0;
let mouseY = 0;

function mousePos(e) {
  if (!mie) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  }
  document.formex.formMouseX.value = mouseX;
  document.formex.formMouseY.value = mouseY;
  return true;
}

function keyPressed(e) {
  if (!mie) {
    keyClicked = String.fromCharCode(e.charCode); // Converts char code to character
  }
  if (!keyClicked) {
    return false;
  }
  document.formex.formKeyboardPress.value = keyClicked;
  return true;
}

function mouseClicked(e) {
  if (!mie) {
    switch (e.which) {
      case 1:
        document.formex.formMousePress.value = 'Left';
        break;
      case 2:
        document.formex.formMousePress.value = 'Middle';
        break;
      default:
        document.formex.formMousePress.value = 'Right';
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

const escaped_chars = '" \' \\ \t \n';
document.write(`${escaped_chars} the length is ${escaped_chars.length}`);

const lastName = 'hammou';
const firstName = `Amine ${lastName}`;

document.write(`<br>${firstName.substring(6, firstName.length)}`);

document.write(` <br> index of ${lastName.charAt(4)} is ${lastName.indexOf('o')}`);
// functions to use with numbers
/*
    number : convert the element to a number (integer)
    parseInt : convert the element to an integer
    toString : change the element to a string
    toFixed : shorten a float to a fixed integer
    typeof : returns the datatype of the element
    Boolean : false(0 or Nan : not a number) , true
    */
/* arays */
const vehicules = ['car', 'shit'];
let i;
for (i in vehicules) {
  document.write(`<br>${vehicules[i]}`);
}
/* conditions */
// conditional operator (x) ? y : z
// condition is x if true ? do this : else do this
const test = 4 < 10 ? '4 is less' : '4 is big';
document.write(`<br>${test}<br>`);
const state = 'blida';
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
// OOP

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
