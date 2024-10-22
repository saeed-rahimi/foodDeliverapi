"use strict"

const container = document.createElement("div");
const navbar = document.createElement("div");
const product = document.createElement("div");
const searchBar = document.createElement("div");
const input=document.createElement("input")
// Add classes
container.classList.add("container");
navbar.classList.add("navbar");
product.classList.add("product");
boxs
boxs.append(boxlist)
console.log(boxs);


// Append the navbar and product to the container
container.append(navbar);
container.append(product);
navbar.append(input);


// style input
input.style.margin="20px"
input.style.width="80%"
input.style.height="50px"
input.style.backgroundColor="red";
input.style.border=" 2px solid blue"
input.style.borderRadius="10px"
input.style.fontSize="30px"
input.style.padding="15px"
input.maxLength="15"
input.placeholder="enter your Food"



// Style the container
container.style.width = "100%";
container.style.display = "flex";
container.style.backgroundColor = "black";
document.body.append(container); // Make sure to append container to the document body to make it visible

// Style the navbar
navbar.style.width = "30%";
navbar.style.height = "80vh";
navbar.style.backgroundColor = "white";
navbar.style.margin = "40px";
navbar.style.marginTop = "135px";
navbar.style.borderRadius = "16px";

// Style the product div
product.style.width = "70%";
product.style.height = "80vh";
product.style.backgroundColor = "green";
product.style.margin = "40px";
product.style.marginTop = "135px";
product.style.borderRadius = "16px";
