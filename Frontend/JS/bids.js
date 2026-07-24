const container = document.getElementById("bidsContainer");

async function loadMyBids() {

    try {

        const response = await fetch("http://localhost:5000/api/bids/my", {

            headers: {
                "token": localStorage.getItem("token")
            }

        });

        const data = await response.json();

        if (data.success) {

            container.innerHTML = "";

            data.bids.forEach(bid => {

                container.innerHTML += `
                    <div class="bid-card">
                        <h3>${bid.title}</h3>
                        <p><strong>Bid Amount:</strong> ₹${bid.amount}</p>
                    </div>
                `;

            });

        } else {

            container.innerHTML = "<h3>No bids found.</h3>";

        }

    } catch (err) {

        console.error(err);

    }

}

loadMyBids();