// formHandler.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const formOutput = document.getElementById('formOutput');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (validateForm()) {
            const userData = {
                name: form.name.value,
                email: form.email.value,
                message: form.message.value
            };

            displayUserData(userData);
            form.reset();
        }
    });

    function validateForm() {
        let isValid = true;
        const inputs = form.querySelectorAll('input, textarea');

        inputs.forEach(input => {
            if (!input.value) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        return isValid;
    }

    function displayUserData(data) {
        formOutput.innerHTML = `
            <h2>Submitted Information</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Message:</strong> ${data.message}</p>
        `;
    }
});
