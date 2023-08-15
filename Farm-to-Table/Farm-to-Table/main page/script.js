// for navbar
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}



// for cart

document.addEventListener("DOMContentLoaded", function () {
    const buyButtons = document.querySelectorAll(".buy-now");
    const totalAmountElement = document.querySelector(".total-amount");
    let totalAmount = 0;

    buyButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const productCard = this.closest(".product-card");
            const addToCart = productCard.querySelector(".add-to-cart");

            // Toggle the visibility of the cart section
            addToCart.classList.toggle("visible");

            // Calculate and update the total amount
            const priceElement = productCard.querySelector(".price");
            const price = parseFloat(priceElement.textContent.replace("$", ""));
            totalAmount += price;
            totalAmountElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
        });
    });
});

// for reviews

document.addEventListener("DOMContentLoaded", function () {
    const reviewForm = document.getElementById("review-form");
    const reviewsList = document.getElementById("reviews-list");

    reviewForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const rating = document.getElementById("rating").value;
        const reviewText = document.getElementById("review").value;

        const reviewData = {
            name: name,
            rating: rating,
            review: reviewText
        };

        // Add the new review to the reviews list (dynamically)
        addReviewToList(reviewData);

        // Clear form fields
        reviewForm.reset();
    });

    function addReviewToList(review) {
        const reviewItem = document.createElement("li");
        reviewItem.classList.add("review-item");

        const ratingElement = document.createElement("div");
        ratingElement.classList.add("review-rating");
        ratingElement.textContent = `${review.rating} Stars`;

        const reviewTextElement = document.createElement("div");
        reviewTextElement.classList.add("review-text");
        reviewTextElement.textContent = review.review;

        reviewItem.appendChild(ratingElement);
        reviewItem.appendChild(reviewTextElement);

        reviewsList.appendChild(reviewItem);
    }
});
// Sample array of previous reviews (you can replace this with actual data)
const previousReviews = [
    { name: "Alice", rating: "5", review: "Great product! Highly recommended." },
    { name: "Bob", rating: "4", review: "Good quality, but a bit expensive." },
    { name: "Charlie", rating: "3", review: "Decent product, could be better." }
];

// Function to display previous reviews
function displayPreviousReviews() {
    const reviewsList = document.getElementById("reviews-list");

    // Clear existing reviews
    reviewsList.innerHTML = "";

    // Iterate through previous reviews in reverse order to display newest at the top
    for (let i = previousReviews.length - 1; i >= 0; i--) {
        const review = previousReviews[i];

        const reviewItem = document.createElement("li");
        reviewItem.classList.add("review-item");

        const ratingElement = document.createElement("div");
        ratingElement.classList.add("review-rating");
        ratingElement.textContent = `${review.rating} Stars`;

        const reviewTextElement = document.createElement("div");
        reviewTextElement.classList.add("review-text");
        reviewTextElement.textContent = review.review;

        reviewItem.appendChild(ratingElement);
        reviewItem.appendChild(reviewTextElement);

        // Insert review item at the beginning of the list
        reviewsList.insertBefore(reviewItem, reviewsList.firstChild);
    }
}

// Call the function to display previous reviews
displayPreviousReviews();
