const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // stop submitting until validation passes

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let successMsg = document.getElementById("successMsg");

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let valid = true;

    // Reset previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMsg.textContent = "";

    if (name === "") {
        nameError.textContent = "Name is required.";
        valid = false;
    }

    if (!emailRegex.test(email)) {
        emailError.textContent = "Enter a valid email address.";
        valid = false;
    }

    if (message === "") {
        messageError.textContent = "Message cannot be empty.";
        valid = false;
    }

    if (valid) {
        successMsg.textContent = "Form submitted successfully ✔";
        form.reset();
    }
});
