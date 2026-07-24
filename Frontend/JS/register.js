const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullName = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();

    const passwords = document.querySelectorAll('input[type="password"]');
    const password = passwords[0].value;
    const confirmPassword = passwords[1].value;

    const role = document.querySelector('input[name="role"]:checked');

    if (!role) {
        alert("Select a role");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fullname: fullName,
                email: email,
                password: password,
                role: role.value
            })
        });

        const data = await response.json();

        alert(data.message);

        if (data.success) {
            window.location.href = "login.html";
        }

    } catch (err) {
        console.error(err);
        alert("Server Error");
    }
});