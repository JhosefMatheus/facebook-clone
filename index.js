// password components

let actualEye = "closed";

const passwordField = document.querySelector(".password-field");
const passwordInput = document.getElementById("password-input");
const eyeOpen = document.getElementById("eye-open");
const eyeClosed = document.getElementById("eye-closed");

// registerDialog components

const days = [];
const years = [];

function setDays(daysArray) {
    for (let i = 1; i <= 31; i++) {
        daysArray.push(i);
    }
}

const registerButton = document.getElementById("create-account-button");
const registerDialog = document.getElementById("register-dialog");
const closeRegisterButton = document.getElementById("close-register-button");
const confirmRegisterButton = document.getElementById("confirm-register-button");

// password actions

passwordInput.onfocus = () => {
    passwordField.style.border = "1px solid #1877f2";
}

passwordInput.addEventListener("focusout", () => {
    passwordField.style.border = "1px solid #dddfe2";
});

passwordInput.addEventListener("keyup", () => {
    const passwordText = passwordInput.value;

    if (passwordText.length > 0) {
        actualEye === "open" ? eyeOpen.style.display = "block" : eyeClosed.style.display = "block";
    } else {
        actualEye === "open" ? eyeOpen.style.display = "none" : eyeClosed.style.display = "none";
    }
});

eyeOpen.onclick = () => {
    actualEye = "closed";

    passwordInput.type = "password";

    eyeOpen.style.display = "none";
    eyeClosed.style.display = "block";
}

eyeClosed.onclick = () => {
    actualEye = "open";

    passwordInput.type = "text";

    eyeClosed.style.display = "none";
    eyeOpen.style.display = "block";
}

// registerDialog actions

registerButton.onclick = () => {
    registerDialog.style.display = "flex";
    registerDialog.style.justifyContent = "center";
    registerDialog.style.alignItems = "center";
}

closeRegisterButton.onclick = () => {
    registerDialog.style.display = "none";
}

confirmRegisterButton.onclick = () => {
    registerDialog.style.display = "none";
}