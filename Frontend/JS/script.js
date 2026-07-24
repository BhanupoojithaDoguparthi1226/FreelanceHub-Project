// Smooth scrolling for navigation links

document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
    });
});

// Hero buttons

const hireBtn = document.querySelector(".btn");
const workBtn = document.querySelector(".btn2");

hireBtn.addEventListener("click", () => {
    window.location.href = "register.html";
});

workBtn.addEventListener("click", () => {
    window.location.href = "login.html";
});

// Card hover animation

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseout", () => {
        card.style.transform = "translateY(0)";
    });
});