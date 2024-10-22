"use strict";

const container = document.createElement("div");
const navbar = document.createElement("div");
const product = document.createElement("div");
const searchBar = document.createElement("div");
const boxsFoods = document.createElement("div");
const input = document.createElement("input");
const listFoods = `  
  <ul>
      <li><a href="#biryani">biryani</a></li>
      <li><a href="#butter-chicken">butter-chicken</a></li>
      <li><a href="#dosa">dosa</a></li>
      <li><a href="#pasta">pasta</a></li>
      <li><a href="#rice">rice</a></li>
      <li><a href="#burger">burger</a></li>
      <li><a href="#dessert">dessert</a></li>
      <li><a href="#idly">idly</a></li>
      <li><a href="#pizza">pizza</a></li>
      <li><a href="#samosa">samosa</a></li>
    </ul>`;
const productItem = `<div>
    <img src="" alt="">
    <h3>name</h3>
    <span>number</span>
   </div>`;
// Add classes
container.classList.add("container");
navbar.classList.add("navbar");
product.classList.add("product");
boxsFoods.classList.add("boxFoods");
// Append the navbar and product to the container
container.append(navbar);
container.append(product);
navbar.append(input);
navbar.append(boxsFoods);
console.log(navbar);

boxsFoods.insertAdjacentHTML("beforeend", listFoods);

// style boxFoods

boxsFoods.style.margin = "20px";
boxsFoods.style.fontSize = "20px";
// style input
input.style.margin = "20px";
input.style.width = "80%";
input.style.height = "50px";
input.style.backgroundColor = "red";
input.style.border = " 2px solid blue";
input.style.borderRadius = "10px";
input.style.fontSize = "30px";
input.style.padding = "15px";
input.maxLength = "15";
input.placeholder = "enter your Food";

// Style the container
container.style.width = "100%";
container.style.display = "flex";
container.style.backgroundColor = "gray";
document.body.append(container); // Make sure to append container to the document body to make it visible

// Style the navbar
navbar.style.width = "30%";
navbar.style.height = "80vh";
navbar.style.backgroundColor = "white";
navbar.style.margin = "40px";
navbar.style.marginTop = "100px";
navbar.style.borderRadius = "16px";

// Style the product div
product.style.width = "70%";
product.style.height = "80vh";
product.style.backgroundColor = "green";
product.style.margin = "40px";
product.style.marginTop = "100px";
product.style.borderRadius = "16px";
product.style.display = "flex";
product.style.gap = "10px";
product.style.flexWrap = "wrap";
product.style.padding = "20px";





// implement div product

const createDivProduct = function () {

  const DivProduct = `  <div style="display: flex; gap: 10px; flex-wrap: wrap ; margin: 20px;">
      <div style="text-align: center">
        <img src="food.JPG" style="width: 100px" alt="" />
        <h3>name</h3>
        
      </div>
     
    </div>`;

  product.insertAdjacentHTML("afterbegin", DivProduct);
};
for (let i = 0; i < 30; i++) {
  createDivProduct()
  
}



// implement div product

const generateFood = async function () {
  try {
    const getfood = await fetch(
      "https://foodish-api.com/images/dessert/dessert35.jpg"
    );
    const textgetFood = getfood.json();
    console.log(getfood);
  } catch {
    console.error("not found");
  }
};
generateFood();
