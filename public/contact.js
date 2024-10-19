// contact.js
document.getElementById('contactForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send contact message (You can implement this in the backend)
    alert('Message sent! Thank you for reaching out, ' + name);
    document.getElementById('contactForm').reset(); // Reset form after submission
});
