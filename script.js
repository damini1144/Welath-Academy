document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const thankYouMessage = document.getElementById("thanks-message");

    if (form) {  // Check if form exists before adding event listener
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const formData = new FormData(form);

            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString(),
            })
                .then(() => {
                    form.style.display = "none";
                    if (thankYouMessage) {
                        thankYouMessage.style.display = "block";
                    }
                })
                .catch((error) => {
                    alert("Oops! Something went wrong. Please try again.");
                    console.error("Form submission error:", error);
                });
        });
    }
});
