document.addEventListener("DOMContentLoaded", function() {
    const form = document.createElement("form");
    form.id = "myForm";

    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name:";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.required = true;

    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.required = true;

    const messageLabel = document.createElement("label");
    messageLabel.textContent = "Message:";
    const messageInput = document.createElement("textarea");
    messageInput.id = "message";
    messageInput.required = true;

    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Submit";

    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(messageLabel);
    form.appendChild(messageInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(submitButton);

    document.body.appendChild(form);

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Form validation
        if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
            alert("All fields are required.");
            return;
        }

        // Store user input in an object
        let userInput = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        };

        // Perform further actions with the userInput object
        console.log(userInput);
        // You can send the data to a server, perform data manipulation, or any other desired actions.

        // Reset the form
        form.reset();
    });
});
