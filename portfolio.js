document.getElementById('contact-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent page reload on form submission

    // Gather form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('mail_id').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple client-side validation
    if (!name || !email || !message) {
        showMessage('Please fill in all the fields.', 'error');
        return;
    }

    // Simulate sending form data (replace with your API endpoint)
    const responseMessage = document.getElementById('response-message');
    responseMessage.classList.remove('hidden');
    responseMessage.textContent = 'Sending...';
    responseMessage.className = 'mt-4 text-blue-500 text-sm';

    try {
        // Simulated API request (replace with real fetch to a backend or email service)
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay

        showMessage('Thank you for reaching out! I will get back to you soon.', 'success');
        document.getElementById('contact-form').reset(); // Clear form fields
    } catch (error) {
        showMessage('Oops! Something went wrong. Please try again later.', 'error');
    }
});

function showMessage(message, type) {
    const responseMessage = document.getElementById('response-message');
    responseMessage.textContent = message;
    responseMessage.className = `mt-4 text-sm ${type === 'success' ? 'text-green-500' : 'text-red-500'}`;
}
