const password = document.getElementById("password");
const passowrdConfirmation = document.getElementById("confirm-password");
const email = document.getElementById("email");

passowrdConfirmation.addEventListener("input", () => {
    if (password.value === passowrdConfirmation.value) {
        passowrdConfirmation.setCustomValidity("");
    } else {
        passowrdConfirmation.setCustomValidity("Invalid input");
    }
})

email.addEventListener("input", () => {
    const validEmailRegex = /^[^\W_][\w\-.]+[^\W_]@[^\W_]+\.[a-zA-Z]{2,}$/;
    if ((email.value).match(validEmailRegex)) {
        email.setCustomValidity("");
    } else {
        email.setCustomValidity("Invalid input");
    }
})