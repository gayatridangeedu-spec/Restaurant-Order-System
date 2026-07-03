// Cart Counter

let cart = 0;

document.getElementById("cart-count").innerHTML = cart;


// Highlight Active Page

const currentPage = window.location.pathname.split("/").pop();

const links = document.querySelectorAll(".nav-links a");

links.forEach(link=>{

if(link.getAttribute("href")==currentPage){

link.classList.add("active");

}

});

console.log("FoodExpress Loaded Successfully");