const ul = document.getElementById("item-list");
const addItem = document.getElementById("add-item");
const search = document.getElementById("filter");
const form = document.getElementById("formx");
search.addEventListener("keyup", searchItems);
ul.addEventListener("click", deleteItems);
form.addEventListener("submit", addingItems);

function addingItems(e) {
  e.preventDefault();
  const item = addItem.value;
  const newLi = document.createElement("li");
  newLi.className = "list-group-item";
  newLi.appendChild(document.createTextNode(item));
  const btn = document.createElement("button");
  btn.appendChild(document.createTextNode("X"));
  btn.className = "delete";
  newLi.appendChild(btn);
  ul.appendChild(newLi);
  addItem.value = "";
}
function deleteItems(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("are you sure")) {
      const li = e.target.parentElement;
      ul.removeChild(li);
    }
  }
}

function searchItems(e) {
  const inputSearch = e.target.value.toLowerCase();
  const li = ul.getElementsByTagName("li");
  Array.from(li).forEach(items => {
    const itemName = items.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(inputSearch) !== -1) {
      items.style.display = "block";
    } else {
      items.style.display = "none";
    }
  });
}
