document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("subscribe-form").addEventListener("submit", async function (e) {
        e.preventDefault(); // Prevent default form submission

        const emailInput = document.getElementById("email");
        const email = emailInput.value.trim();

        console.log("Captured Email:", email); // Debugging

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            console.log("Validation failed: Invalid email format");
            return;
        }

        console.log("Validation passed! Sending email:", email);
    });
});
