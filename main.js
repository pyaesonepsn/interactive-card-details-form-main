const success = document.querySelector(".completed-state");
const form = document.querySelector("#form");
const inputs = document.querySelectorAll('.form-input');
const nameInput = document.querySelector('#name');
const numberInput = document.querySelector('#number');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
const cvcInput = document.querySelector('#cvc');
const continueBtn = document.querySelector('.confirmBtn');
const isEmptyErrorMessage = "Can't be blank";
const hasCharactersErrorMessage = "Wrong format,numbers only";
const card_number = document.querySelector('.left-card-number');
const card_name = document.querySelector('.name');
const card_month = document.querySelector('.month');
const card_year = document.querySelector('.year');
const card_cvc = document.querySelector('.card-cvc');

let removeErrorStyle = (input) => {
    input.classList.remove('error');
}

let removeErrorMessage = (input) => {
    let error = document.getElementById(input.dataset.target);
    error.classList.remove('visible');
}

let isEmpty = (value) => {
    return !value.length;
}

let hasCharacters = (value) => {
    return !/^\d+$/.test(value);
}

let displayError = (input,message) => {
    let error = document.getElementById(input.dataset.target);
    error.textContent = message;
    error.classList.add('visible');
    input.classList.remove('error');
}

nameInput.addEventListener('keyup', () => {
    card_name.textContent = nameInput.value;
    if(isEmpty(nameInput.value)){
        displayError(nameInput, isEmptyErrorMessage);
        return;
    }
    removeErrorStyle(nameInput);
    removeErrorMessage(nameInput);
})

let formatCreditCardNumber = (str) => {
    return str.match(/.{1,4}/g).join(' ');
}

numberInput.addEventListener('keypress',(event) => {
    event.preventDefault();
    let value = numberInput.value.split(' ').join('');
    if(value.length === 16) return;
    let newValue = numberInput.value.split(' ').join('') + event.key;
    numberInput.value = formatCreditCardNumber(newValue);
})

numberInput.addEventListener("keyup", () => {
    card_number.textContent = numberInput.value;
    let value = number.value.split(" ").join("");

    if (isEmpty(value)) {
        displayError(numberInput, isEmptyErrorMessage);
        return;
    }

    if (hasCharacters(value)) {
        displayError(numberInput, hasCharactersErrorMessage);
        return;
    }

    removeErrorStyle(numberInput);
    removeErrorMessage(numberInput);
});

monthInput.addEventListener("keyup", () => {
    card_month.textContent = monthInput.value;
    if (isEmpty(monthInput.value)) {
        displayError(monthInput, isEmptyErrorMessage);
        return;
    }
    if (hasCharacters(monthInput.value)) {
        displayError(monthInput, hasCharactersErrorMessage);
        return;
    }
    removeErrorStyle(monthInput);
    removeErrorMessage(monthInput);
});

yearInput.addEventListener("keyup", () => {
    card_year.textContent = yearInput.value;
    if (isEmpty(yearInput.value)) {
        displayError(yearInput, isEmptyErrorMessage);
        return;
    }
    if (hasCharacters(yearInput.value)) {
        displayError(yearInput, hasCharactersErrorMessage);
        return;
    }
    removeErrorStyle(yearInput);
    removeErrorMessage(yearInput);
});

cvcInput.addEventListener("keyup", () => {
    card_cvc.textContent = cvcInput.value;
    if (isEmpty(cvcInput.value)) {
        displayError(cvcInput, isEmptyErrorMessage);
        return;
    }
    if (hasCharacters(cvcInput.value)) {
        displayError(cvcInput, hasCharactersErrorMessage);
        return;
    }
    removeErrorStyle(cvcInput);
    removeErrorMessage(cvcInput);
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (isValidForm()) {
        form.style.display = "none";
        success.style.display = "flex";
        return;
    }
});

const isValidForm = () => {
    const isValidName = !isEmpty(nameInput.value);
    const isValidNumber =
        !isEmpty(numberInput.value.split(" ").join("")) &&
        !hasCharacters(numberInput.value.split(" ").join(""));
    const isValidMonth =
        !isEmpty(monthInput.value) && !hasCharacters(monthInput.value);
    const isValidYear =
        !isEmpty(yearInput.value) && !hasCharacters(yearInput.value);
    const isValidCVC = !isEmpty(cvcInput.value) && !hasCharacters(cvcInput.value);

    return (
        isValidName && isValidNumber && isValidMonth && isValidYear && isValidCVC
    );
};

const reset = () => {
    inputs.forEach((input) => {
        input.value = "";
    });

    card_number.textContent = "0000 0000 0000 0000";
    card_name.textContent = "Jane Appleseed";
    card_month.textContent = "00";
    card_year.textContent = "00";
    card_cvc.textContent = "000";
};

continueBtn.addEventListener("click", () => {
    reset();
    form.style.display = "flex";
    success.style.display = "none";
});

