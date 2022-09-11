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

setDays(days);

function setYears(yearsArray) {
    for (let i = 1905; i <= 2022; i++) {
        yearsArray.push(i);
    }
}

setYears(years);

const registerButton = document.getElementById("create-account-button");
const registerDialog = document.getElementById("register-dialog");
const closeRegisterButton = document.getElementById("close-register-button");
const confirmRegisterButton = document.getElementById("confirm-register-button");
const dayOption = document.getElementById("day-option");
const monthOption = document.getElementById("month-option");
const yearOption = document.getElementById("year-option");
const currentDate = new Date().toLocaleDateString("pt-BR");
const nomeInput = document.getElementById("nome");
const nameField = document.getElementById("name-field");
const nameFieldErrorImage = document.getElementById("name-field-error-image");
const sobrenomeInput = document.getElementById("sobrenome");
const sobrenomeField = document.getElementById("sobrenome-field");
const sobrenomeFieldErrorImage = document.getElementById("sobrenome-field-error-image");
const emailInput = document.getElementById("email");
const emailField = document.getElementById("email-field");
const emailFieldErrorImage = document.getElementById("email-field-error-image");
const passwordRegisterInpupt = document.getElementById("password");
const passwordRegisterField = document.getElementById("password-register-field");
const passwordRegisterFieldErrorImage = document.getElementById("password-register-field-error-image");
const femaleRadio = document.getElementById("female");
const maleRadio = document.getElementById("male");
const personalizedRadio = document.getElementById("personalized");
const moreFields = document.getElementById("more-fields");

days.forEach(day => {
    let newDay = document.createElement("option");

    newDay.value = day;
    newDay.text = day;

    dayOption.add(newDay);
});

years.sort().reverse().forEach(year => {
    let newYear = document.createElement("option");

    newYear.value = year;
    newYear.text = year;

    yearOption.add(newYear);
});

function setDay(day) {
    dayOption.childNodes.forEach(option => {
        if (option.innerHTML === day) {
            option.selected = "selected";
        }
    });
}

function setMonth(monthNumber) {
    let actualMonth;

    switch (monthNumber) {
        case "01":
            actualMonth = "janeiro";
            break;

        case "02":
            actualMonth = "fevereiro";
            break;
        
        case "03":
            actualMonth = "março";
            break;
        
        case "04":
            actualMonth = "abril";
            break;

        case "05":
            actualMonth = "maio";
            break;

        case "06":
            actualMonth = "junho";
            break;

        case "07":
            actualMonth = "julho";
            break;

        case "08":
            actualMonth = "agosto";
            break;

        case "09":
            actualMonth = "setembro";
            break;

        case "10":
            actualMonth = "outubro";
            break;

        case "11":
            actualMonth = "novembro";
            break;

        case "12":
            actualMonth = "dezembro";
            break;
        
        default:
            console.log(monthNumber);
            break;
    }

    monthOption.childNodes.forEach(option => {
        if (option.value === actualMonth) {
            option.selected = "selected";
        }
    });
}

function setYear(year) {
    yearOption.childNodes.forEach(option => {
        if (option.innerHTML === year) {
            option.selected = "selected";
        }
    });
}

function setCurrentDate(currentDate) {
    const [ day, month, year ] = currentDate.split("/");

    setDay(day);
    setMonth(month);
    setYear(year);
}

setCurrentDate(currentDate);

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

nomeInput.addEventListener("focusout", () => {
    if (nomeInput.value.length === 0) {
        nameField.style.border = "1px solid red";
        nameFieldErrorImage.style.display = "block";
    }
});

nomeInput.addEventListener("focusin", () => {
    nameField.style.border = "1px solid #dddfe2";
    nameFieldErrorImage.style.display = "none";
});

sobrenomeInput.addEventListener("focusout", () => {
    if (sobrenomeInput.value.length === 0) {
        sobrenomeField.style.border = "1px solid red";
        sobrenomeFieldErrorImage.style.display = "block";
    }
});

sobrenomeInput.addEventListener("focusin", () => {
    sobrenomeField.style.border = "1px solid #dddfe2";
    sobrenomeFieldErrorImage.style.display = "none";
});

emailInput.addEventListener("focusout", () => {
    if (emailInput.value.length === 0) {
        emailField.style.border = "1px solid red";
        emailFieldErrorImage.style.display = "block";
    }
});

emailInput.addEventListener("focusin", () => {
    emailField.style.border = "1px solid #dddfe2";
    emailFieldErrorImage.style.display = "none";
});

passwordRegisterInpupt.addEventListener("focusout", () => {
    if (passwordRegisterInpupt.value.length === 0) {
        passwordRegisterField.style.border = "1px solid red";
        passwordRegisterFieldErrorImage.style.display = "block";
    }
});

passwordRegisterInpupt.addEventListener("focusin", () => {
    passwordRegisterField.style.border = "1px solid #dddfe2";
    passwordRegisterFieldErrorImage.style.display = "none";
});

femaleRadio.onclick = () => {
    maleRadio.checked = false;
    personalizedRadio.checked = false;

    moreFields.style.display = "none";
}

maleRadio.onclick = () => {
    femaleRadio.checked = false;
    personalizedRadio.checked = false;

    moreFields.style.display = "none";
}

personalizedRadio.onclick = () => {
    femaleRadio.checked = false;
    maleRadio.checked = false;

    moreFields.style.display = "flex";
    moreFields.style.flexDirection = "column";
    moreFields.style.alignItems = "center";
    moreFields.style.justifyContent = "center";
}