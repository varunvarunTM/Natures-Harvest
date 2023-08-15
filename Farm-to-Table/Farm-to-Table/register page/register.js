document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.querySelector(".registration-form");
    const registerButton = document.querySelector(".register-button");

    registerButton.addEventListener("click", function (event) {
        event.preventDefault();

        // Simulate account creation (you can replace this with your actual registration logic)
        // For demonstration purposes, we'll use a setTimeout function to mimic a delay
        // Replace this with your actual account creation logic
        setTimeout(function () {
            // Display a popup with the success message
            alert("Account Created Successfully!");

            window.location.href = "/main page/main.html";
        }, 1000); // Delay of 1 second (1000 milliseconds)
    });
});
