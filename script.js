document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    const errors = document.querySelectorAll(".error");
    errors.forEach(error => error.textContent = "");

    let isValid = true;

    // Validate Name
    const name = document.getElementById("name").value.trim();
    if (!name) {
        document.getElementById("nameError").textContent = "Please enter your full name.";
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
    if (!email) {
        document.getElementById("emailError").textContent = "Please enter your email.";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Validate Event Selection
    const eventSelection = document.getElementById("event").value;
    if (!eventSelection) {
        document.getElementById("eventError").textContent = "Please select an event.";
        isValid = false;
    }

    // Validate Number of Tickets
    const tickets = document.getElementById("tickets").value;
    if (!tickets || tickets < 1) {
        document.getElementById("ticketsError").textContent = "Please enter a valid number of tickets.";
        isValid = false;
    }

    // If valid, show success message
    if (isValid) {
        document.getElementById("successMessage").textContent = "Tickets booked successfully!";
        document.getElementById("bookingForm").reset(); // Reset form fields
    }
});
