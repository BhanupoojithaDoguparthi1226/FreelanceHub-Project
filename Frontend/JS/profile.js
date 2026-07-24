// ==============================
// Edit Profile
// ==============================

const editBtn = document.getElementById("editBtn");

editBtn.addEventListener("click", () => {

    alert("✏️ Edit Profile feature is enabled.");

    const name = document.querySelector(".profile-card h1");

    const newName = prompt("Enter your name:", name.innerText);

    if(newName !== null && newName.trim() !== ""){

        name.innerText = newName;

        alert("✅ Profile updated successfully!");

    }

});


// ==============================
// Change Password
// ==============================

const passwordBtn = document.getElementById("passwordBtn");

passwordBtn.addEventListener("click", () => {

    const password = prompt("Enter your new password:");

    if(password === null){

        return;

    }

    if(password.length < 6){

        alert("Password must be at least 6 characters.");

        return;

    }

    alert("🔒 Password changed successfully!");

});


// ==============================
// Logout
// ==============================

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {

    const confirmLogout = confirm("Are you sure you want to logout?");

    if(confirmLogout){

        alert("👋 Logged out successfully!");

        window.location.href = "index.html";

    }

});


// ==============================
// Welcome Message
// ==============================

window.onload = () => {

    console.log("Profile Page Loaded");

};

const token = localStorage.getItem("token");

fetch("http://localhost:5000/api/auth/profile", {
    method: "GET",
    headers: {
        "token": token
    }
})
.then(res => res.json())
.then(data => {

    console.log(data);

    if(data.success){

        document.getElementById("fullname").innerText =
        data.user.fullname;

        document.getElementById("email").innerText =
        data.user.email;

        document.getElementById("role").innerText =
        data.user.role;

    }

})
.catch(err => console.error(err));