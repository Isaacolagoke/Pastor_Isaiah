
document.getElementById("prayerForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form);
    const successMessage = document.getElementById("successMessage");

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            form.reset(); // Clear the form fields
            
            // Show and animate success message
            successMessage.classList.remove("hidden");
            successMessage.classList.add("opacity-0");
            
            setTimeout(() => {
                successMessage.classList.remove("opacity-0");
                successMessage.classList.add("opacity-100", "transition-opacity", "duration-500", "ease-in-out");
            }, 100); // Short delay to trigger transition

            // Hide the message after 5 seconds
            setTimeout(() => {
                successMessage.classList.add("opacity-0");
                setTimeout(() => {
                    successMessage.classList.add("hidden");
                }, 500); // Wait for fade-out transition
            }, 5000);
            
        } else {
            alert("Oops! Something went wrong. Please try again.");
        }
    } catch (error) {
        alert("Network error. Please try again later.");
    }
});

