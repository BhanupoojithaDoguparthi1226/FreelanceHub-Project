const token = localStorage.getItem("token");

fetch("http://localhost:5000/api/auth/profile", {
    headers: {
        token: token
    }
})
.then(res => res.json())
.then(data => {

    if (!data.success) {
        alert("Please login first");
        window.location.href = "login.html";
        return;
    }

    if (data.user.role !== "admin") {
        alert("Access Denied! Admins only.");
        window.location.href = "dashboard.html";
    }

})
.catch(err => console.log(err));
// ==============================
// Animated Dashboard Counters
// ==============================

const counters = document.querySelectorAll(".card h2");

counters.forEach(counter => {

    let text = counter.innerText;

    if(text.includes("₹")) return;

    let target = parseInt(text.replace(/,/g,""));

    let count = 0;

    let increment = Math.ceil(target / 100);

    let timer = setInterval(() => {

        count += increment;

        if(count >= target){

            counter.innerText = target.toLocaleString();
            clearInterval(timer);

        }else{

            counter.innerText = count.toLocaleString();

        }

    },20);

});


// ==============================
// Card Hover Effect
// ==============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});


// ==============================
// Logout
// ==============================

const logout = document.getElementById("logout");

logout.addEventListener("click", () => {

    const confirmLogout = confirm("Are you sure you want to logout?");

    if(confirmLogout){

        alert("Logged out successfully.");

        window.location.href = "index.html";

    }

});


// ==============================
// Welcome Message
// ==============================

window.onload = () => {

    alert("Welcome Admin! 📊");

};

const token = localStorage.getItem("token");

fetch("http://localhost:5000/api/auth/profile", {
    headers: {
        token: token
    }
})
.then(res => res.json())
.then(data => {

    if(data.success && data.user.role === "admin"){
        document.getElementById("adminMenu").style.display = "block";
    }

});