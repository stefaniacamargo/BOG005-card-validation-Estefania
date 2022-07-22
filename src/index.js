import { maskify, validator } from "./validator.js";

const form = document.querySelector(".personal-data-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const creditCardNumber = formData.get("CreditCard");
    if (validator(creditCardNumber)) {
    alert("Your credit card is valid, thanks you for your purchase");
    } else {
    alert("Your credit card is invalid, please try again");
    }
});

// Credit-Card


const numberInput = document.querySelector("#CreditCard");
const tcNumberDisplay = document.querySelector(".tc-number");

numberInput.addEventListener("keyup", function (event) {
    const creditCardNumber = event.currentTarget.value;
    tcNumberDisplay.textContent = maskify(creditCardNumber);
});

const textInput = document.querySelector("#Name");
const tcNameDisplay = document.querySelector(".tc-name");

    textInput.addEventListener("keyup", function (event) {
    const Name = event.currentTarget.value;
    tcNameDisplay.textContent = (Name);
});

const dateInput = document.querySelector("#ExpirationDate");
const tcDateDisplay = document.querySelector(".tc-date");

    dateInput.addEventListener("keyup", function (event) {
    const ExpirationDate = event.currentTarget.value;
    tcDateDisplay.textContent = (ExpirationDate);
    });
