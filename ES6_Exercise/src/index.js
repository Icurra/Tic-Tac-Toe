import Car from "./car";
import Wishlist from "./wishlist";

let form = document.querySelector("form");
let makeInput = document.querySelector("#make");
let modelInput = document.querySelector("#model");
let yearInput = document.querySelector("#year");
let ul = document.querySelector("ul");

let wishlist = new Wishlist();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let make = makeInput.value;
  let model = modelInput.value;
  let year = yearInput.value;

  let car = new Car(make, model, year);

  wishlist.add(car);

  updateDOM();

  makeInput.value = "";
  modelInput.value = "";
  yearInput.value = "";
});

function updateDOM() {
  ul.innerHTML = "";

  wishlist.list.forEach((car) => {
    let li = document.createElement("li");
    li.textContent = `${car.year} ${car.make} ${car.model}`;
    li.addEventListener("dblclick", () => {
      wishlist.remove(car.id);
      updateDOM();
    });
    ul.appendChild(li);
  });
}
