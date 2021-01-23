// Code to add the table of contents for part 2 (Box Sizing)
const table = document.createElement("ul");
table.innerHTML = `
    <li><div class="color"></div>margin</li>
    <li><div class="color"></div>outline</li>
    <li><div class="color"></div>border</li>
    <li><div class="color"></div>padding</li>
    <li><div class="color"></div>content</li>`;
table.id = "table-of-contents";

const container = document.querySelector("#part-2 .container");
const box = document.querySelector("#part-2 .container .box");
const content = document.querySelector("#part-2 .container .box .box-content");
container.parentNode.insertBefore(table, container.nextSibling);

const list = document.querySelectorAll("#table-of-contents li");
list[0].querySelector(".color").style.backgroundColor = window
  .getComputedStyle(container)
  .getPropertyValue("background-color");
list[1].querySelector(".color").style.backgroundColor = window
  .getComputedStyle(box)
  .getPropertyValue("outline-color");
list[2].querySelector(".color").style.backgroundColor = window
  .getComputedStyle(box)
  .getPropertyValue("border-color");
list[3].querySelector(".color").style.backgroundColor = window
  .getComputedStyle(box)
  .getPropertyValue("background-color");
list[4].querySelector(".color").style.backgroundColor = window
  .getComputedStyle(content)
  .getPropertyValue("background-color");
