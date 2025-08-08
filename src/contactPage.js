export function contactPageContents() {
    const divContent = document.querySelector("#content");

    const form = document.createElement("form");
    
    // Name input
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name: ";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "name";
    nameInput.required = true;
    
    // Email input
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email: ";
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = "email";
    emailInput.required = true;
    
    // Submit button
    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Submit";
    
    // Add to form
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(submitBtn);
    
    // Add form to content div
    divContent.appendChild(form);
    
    // Handle form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("Name:", nameInput.value);
        console.log("Email:", emailInput.value);
    });

}