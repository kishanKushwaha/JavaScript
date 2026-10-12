//ex-1
// const container = document.querySelector("#container");
// const title = document.querySelector("#title");
// const message = document.querySelector("#message");
// const button = document.querySelector("#button");
// const list = document.querySelector("#list");
// const banana = document.querySelector("#banana");

// ex-1
// console.log(message.parentElement);
//ex-2
//console.log(container.children.length);
//ex-3
// console.log(banana.previousElementSibling);
// console.log(banana.nextElementSibling);
//ex-4
// message.nextElementSibling.textContent = "You clicked a button";
// console.log(message.nextElementSibling.textContent);

//Day 28 challenge
const myList = document.querySelector("#myList");
const itemInput = document.querySelector("#itemInput");
const addBtn = document.querySelector("#addBtn");

myList.addEventListener("click", (event)=>{
  const removeButton = event.target.closest(".remove-btn");

  if (!removeButton || !myList.contains(removeButton)) {
    return;
  }

  const listItem = removeButton.closest("li");

  if (listItem) {
    listItem.remove();
  }
});

addBtn.addEventListener("click", ()=> {
  const text = itemInput.value.trim();

  if (text === "") {
    return;
  }

  const li = document.createElement("li");
  li.textContent = itemInput.value.trim();

  const button = document.createElement("button");
  button.className = "remove-btn";
  button.textContent = "Remove";

  li.appendChild(button);
  myList.appendChild(li);

  itemInput.value = "";
});
