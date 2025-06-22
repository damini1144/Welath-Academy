document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const thankYouMessage = document.getElementById("thanks-message");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Stop the page from reloading
  
      const formData = new FormData(form);
  
      // Send form data to Netlify
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          form.style.display = "none"; // Hide form
          thankYouMessage.style.display = "block"; // Show thank-you
        })
        .catch((error) => {
          alert("Oops! Something went wrong. Please try again.");
          console.error("Form submission error:", error);
        });
    });
  });
  