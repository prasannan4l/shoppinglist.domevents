var txtItem = document.getElementById('txtitems');
var btnEnter = document.getElementById('btnEnter');
var list = document.querySelector('ul');


function addItem(){
  if (txtItem.value !==null && txtItem.value !== ""){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(txtItem.value));
    li.setAttribute("id", txtItem.value);
    list.appendChild(li);
    addDeleteButton(li, txtItem.value);
    regainFocus();
  }
}

function enterItemKeyboard(event){
  if (event.which === 13){
    addItem();
  }
}

function addDeleteButton(listItem, id){
  var button = document.createElement("button");
  button.appendChild(document.createTextNode("DELETE"));
  button.classList.add("spacing");
  listItem.appendChild(button);
}

function deleteListItem(event){
  if (event.target.className === "spacing"){
    var id = event.target.parentElement.id;
    list.removeChild(document.getElementById(id));
    regainFocus();
  }
}

function regainFocus(){
  txtItem.value = "";
  txtItem.focus();
}

btnEnter.addEventListener("click", addItem);
txtItem.addEventListener("keypress", enterItemKeyboard);
document.addEventListener("click",deleteListItem);
