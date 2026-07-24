// Get Project ID from URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Load Project
async function loadProject() {

    try {

        const response = await fetch(
            "http://localhost:5000/api/projects/" + id
        );

        const data = await response.json();

        if(data.success){

            document.getElementById("title").innerText =
            data.project.title;

            document.getElementById("description").innerText =
            data.project.description;

            document.getElementById("budget").innerText =
            "₹" + data.project.budget;

            document.getElementById("category").innerText =
            data.project.category;

        }

    } catch(err){

        console.log(err);

    }

}

loadProject();


// Bid Button
document.getElementById("bidBtn").addEventListener("click", () => {

    window.location.href = "bids.html?id=" + id;

});