
document.addEventListener("DOMContentLoaded", function () {
    const openForm = document.getElementById("openForm");
    const closeForm = document.getElementById("closeForm");
    const formOverlay = document.getElementById("formOverlay");
    const prayerForm = document.getElementById("prayerFormOverlay");
    const successMessage = document.getElementById("successMessageOverlay");

    // Open overlay form with blur effect
    openForm.addEventListener("click", () => {
        formOverlay.classList.remove("hidden");
        setTimeout(() => formOverlay.classList.add("opacity-100"), 10);
    });

    // Close overlay form
    closeForm.addEventListener("click", () => {
        formOverlay.classList.remove("opacity-100");
        setTimeout(() => formOverlay.classList.add("hidden"), 300);
    });

    // Handle form submission
    prayerForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = new FormData(prayerForm);

        try {
            const response = await fetch(prayerForm.action, {
                method: prayerForm.method,
                body: formData,
                headers: { "Accept": "application/json" },
            });

            if (response.ok) {
                prayerForm.reset(); // Clear form

                // Show success message
                successMessage.classList.remove("hidden");
                setTimeout(() => successMessage.classList.add("opacity-100"), 100);

                // Hide success message after 5s
                setTimeout(() => {
                    successMessage.classList.add("opacity-0");
                    setTimeout(() => {
                        successMessage.classList.add("hidden");
                        formOverlay.classList.add("hidden"); // Close the overlay
                    }, 500);
                }, 5000);
            } else {
                alert("Oops! Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("Network error. Please try again later.");
        }
    });
});

