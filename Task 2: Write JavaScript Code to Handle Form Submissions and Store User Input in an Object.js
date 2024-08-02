// formHandler.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const formOutput = document.getElementById('formOutput');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const userData = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value
        };

        displayUserData(userData);
        form.reset();
    });

    function displayUserData(data) {
        formOutput.innerHTML = `
            <h2>Submitted Information</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Message:</strong> ${data.message}</p>
        `;
    }
});
