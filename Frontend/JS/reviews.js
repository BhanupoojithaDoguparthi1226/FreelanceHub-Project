// ==============================
// Star Rating System
// ==============================

const stars = document.querySelectorAll(".star");
let rating = 0;

stars.forEach((star, index) => {

    star.addEventListener("click", () => {

        rating = index + 1;

        stars.forEach((s, i) => {

            if(i < rating){

                s.classList.remove("fa-regular");
                s.classList.add("fa-solid");

            }else{

                s.classList.remove("fa-solid");
                s.classList.add("fa-regular");

            }

        });

    });

});


// ==============================
// Submit Review
// ==============================

const submitBtn = document.getElementById("submitReview");

submitBtn.addEventListener("click", () => {

    const review = document.getElementById("reviewText").value.trim();

    if(rating === 0){

        alert("Please select a star rating.");
        return;

    }

    if(review.length < 10){

        alert("Please write a review with at least 10 characters.");
        return;

    }

    alert("⭐ Thank you! Your review has been submitted successfully.");

    setTimeout(() => {

        window.location.href = "profile.html";

    }, 1000);

});


// ==============================
// Auto Focus
// ==============================

window.onload = () => {

    document.getElementById("reviewText").focus();

};