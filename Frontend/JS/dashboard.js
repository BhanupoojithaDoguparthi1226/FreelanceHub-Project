// =========================
// Greeting Based on Time
// =========================

const heading = document.querySelector("header h1");

const hour = new Date().getHours();

if(hour < 12){
    heading.innerHTML = "🌞 Good Morning!";
}
else if(hour < 18){
    heading.innerHTML = "☀️ Good Afternoon!";
}
else{
    heading.innerHTML = "🌙 Good Evening!";
}

// =========================
// Animated Counter
// =========================

const counters = document.querySelectorAll(".card h2");

counters.forEach(counter=>{

    let text = counter.innerText;

    if(text.includes("₹")) return;

    let target = parseInt(text);

    let count = 0;

    let speed = target / 60;

    let interval = setInterval(()=>{

        count += Math.ceil(speed);

        if(count >= target){

            counter.innerText = target;
            clearInterval(interval);

        }
        else{

            counter.innerText = count;

        }

    },25);

});

// =========================
// Logout Confirmation
// =========================

document.getElementById("logout").addEventListener("click", function(e){

    e.preventDefault();

    if(confirm("Are you sure you want to logout?")){

        localStorage.removeItem("token");
        window.location.href = "login.html";

    }

});

// =========================
// Welcome Notification
// =========================

setTimeout(()=>{

    alert("🎉 Welcome to FreelanceHub Dashboard!");

},800);

const adminEmail = "bhanupoojitha00@gmail.com";

const loggedInUser = JSON.parse(localStorage.getItem("user"));

if (loggedInUser && loggedInUser.email === adminEmail) {
    document.getElementById("adminLink").style.display = "block";
}

const user = JSON.parse(localStorage.getItem("user"));

if (user && user.role === "admin") {
    document.getElementById("adminLink").style.display = "block";
} else {
    document.getElementById("adminLink").style.display = "none";
}