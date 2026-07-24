console.log("create_project.js loaded");
const form = document.getElementById("projectForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const budget = document.getElementById("budget").value;
    const category = document.getElementById("category").value;

    try{

        const response = await fetch(
            "http://localhost:5000/api/projects/create",
            {
                method:"POST",

                headers:{
                    "Content-Type":"application/json",
                    "token":token
                },

                body:JSON.stringify({
                    title,
                    description,
                    budget,
                    category
                })
            }
        );

        const data = await response.json();

        alert(data.message);

        if(data.success){

            window.location.href="browse-projects.html";

        }

    }catch(err){

        console.log(err);
        alert("Server Error");

    }

});