function showImage(src) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = src;
    lightbox.style.display = "block";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function validateForm() {
    // Get the input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Initialize an empty array to collect error messages
    let errors = [];

    // Validate Name: it should not be empty
    if (name === "") {
        errors.push("Name is required.");
    }

    // Validate Email: it should be a valid email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errors.push("Please enter a valid email address.");
    }

    // Validate Message: it should not be empty
    if (message === "") {
        errors.push("Message is required.");
    }

    // Check if there are any errors
    if (errors.length > 0) {
        // Display error messages
        alert("Please fix the following errors:\n" + errors.join("\n"));
        // Prevent form submission
        return false;
    }

    // If no errors, allow the form to be submitted
    return true;
}
