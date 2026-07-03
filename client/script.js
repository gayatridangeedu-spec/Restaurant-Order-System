// ===============================
// Restaurant Order System
// script.js
// ===============================

// Display welcome message
console.log("Welcome to FoodExpress!");

// ===============================
// Highlight Active Navigation Link
// ===============================

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});

// ===============================
// Cart Count
// ===============================

// Later, this value will come from localStorage or the database.
let cartCount = 0;

const cartBadge = document.querySelector(".cart-count");

if (cartBadge) {
    cartBadge.textContent = cartCount;
}

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});