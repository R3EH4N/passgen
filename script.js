document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generate");
    const copyButton = document.getElementById("copy");
    const passwordField = document.getElementById("password");
    const lengthInput = document.getElementById("length");

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    generateButton.addEventListener("click", function () {
        const length = parseInt(lengthInput.value);
        let password = "";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters.charAt(randomIndex);
        }

        passwordField.value = password;
    });

    copyButton.addEventListener("click", function () {
        passwordField.select();
        document.execCommand("copy");
    });
});
