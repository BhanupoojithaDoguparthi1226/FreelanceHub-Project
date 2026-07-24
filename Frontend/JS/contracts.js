// ==============================
// Progress Bar Update
// ==============================

const checkboxes = document.querySelectorAll(".milestone input");
const progressFill = document.querySelector(".progress-fill");
const progressText = document.querySelector(".progress p");

function updateProgress(){

    let completed = 0;

    checkboxes.forEach(box => {
        if(box.checked){
            completed++;
        }
    });

    const percentage = Math.round((completed / checkboxes.length) * 100);

    progressFill.style.width = percentage + "%";
    progressText.innerText = percentage + "% Completed";
}

checkboxes.forEach(box => {
    box.addEventListener("change", updateProgress);
});

// ==============================
// Download Contract
// ==============================

const downloadBtn = document.getElementById("download");

downloadBtn.addEventListener("click", () => {

    alert("📄 Contract downloaded successfully!");

});

// ==============================
// Continue to Payments
// ==============================

const nextBtn = document.getElementById("next");

nextBtn.addEventListener("click", () => {

    window.location.href = "payments.html";

});

// ==============================
// Page Loaded Notification
// ==============================

window.onload = () => {

    alert("Contract loaded successfully.");

};