const container = document.getElementById("projectsContainer");

async function loadProjects() {
    try {

        const response = await fetch("http://localhost:5000/api/projects");

        const data = await response.json();

        if (data.success) {

            container.innerHTML = "";

            data.projects.forEach(project => {

                container.innerHTML += `
                <div class="project-card">
                    <h3>${project.title}</h3>

                    <p>${project.description}</p>

                    <div class="info">
                        <span>💰 ₹${project.budget}</span>
                        <span>${project.category}</span>
                    </div>

                    <button onclick="viewProject(${project.id})">
                        View Details
                    </button>

                </div>
                `;
            });

        }

    } catch (err) {

        console.log(err);

    }
}

loadProjects();

function viewProject(id){

    window.location.href =
    "project-details.html?id=" + id;

}