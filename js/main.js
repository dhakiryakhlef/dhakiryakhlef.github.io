function showConfirmationMessage(event) {
    event.preventDefault(); // Prevents the form from being submitted to the server
    document.getElementById('confirmation-message').style.display = 'block'; // Shows the confirmation message
}