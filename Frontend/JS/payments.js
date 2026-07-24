// ==============================
// Download Invoice
// ==============================

const invoiceBtn = document.getElementById("invoice");

invoiceBtn.addEventListener("click", () => {

    alert("📄 Invoice downloaded successfully!");

});


// ==============================
// Complete Payment
// ==============================

const payBtn = document.getElementById("pay");

payBtn.addEventListener("click", () => {

    const status = document.querySelector(".success");

    if(status){

        status.innerText = "Completed";
        status.style.color = "#22C55E";

    }

    alert("🎉 Payment completed successfully!");

    setTimeout(() => {

        window.location.href = "reviews.html";

    }, 1500);

});


// ==============================
// Transaction Row Highlight
// ==============================

const rows = document.querySelectorAll("table tr");

rows.forEach((row, index) => {

    if(index === 0) return;

    row.addEventListener("mouseenter", () => {

        row.style.background = "#EEF2FF";

    });

    row.addEventListener("mouseleave", () => {

        row.style.background = "";

    });

});


// ==============================
// Welcome Message
// ==============================

window.onload = () => {

    console.log("Payments Page Loaded Successfully");

};