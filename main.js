const form = document.getElementbyId("form");
const complete = document.querySelector(".completed-state");
const confirmBtn = document.querySelector(".confirmBtn");
const continueBtn = document.querySelector(".continueBtn");
const inputs = document.querySelectorAll("input");
let isFilled = true;

// check all the input types are filled or not
function checkInputs(){
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].value === "") {
            isFilled = false;
        }
    }
}

function showComplete(){
    if(isFilled === true){
        form.style.visibility = "hidden";
        complete.style.visibility = "visible";
    }
}

confirmBtn.addEventListener('click', showComplete);