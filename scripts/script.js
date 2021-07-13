// TIP AMOUNT RESULTS
let tipAmountPerPerson = document.querySelector(".tip-amount-result-display");
let totalAmountPerPerson = document.querySelector(".total-result-display");
let billInput = document.querySelector(".bill-input");
let customInput = document.querySelector(".custom-input");
let numOfPeopleInput = document.querySelector(".num-of-people");
let billAmount = 0;
let tipAmount = 0;
let numOfPeople = 1;

// BILL INPUT
billInput.addEventListener("input", function(){
    console.log(billInput.value);
    billAmount = parseFloat(billInput.value).toFixed(2);
    calculateResults();
});


//TIP AMOUNT
function submit(element, num){
    console.log(num)
    tipAmount = num/100;
    console.log(tipAmount);
    let buttonName = element.classList[0];
    console.log(buttonName)
    setColour(buttonName);
    let list = element.classList
    console.log(list);
    calculateResults();
}

// NUMBER OF PEOPLE INPUT
numOfPeopleInput.addEventListener("input", function(){
    numOfPeople = parseInt(numOfPeopleInput.value, 10);
    calculateResults()
});

// CUSTOM INPUT
customInput.addEventListener("input", function(){
    console.log(custom.value)
    tipAmount= custom.value/100;
    calculateResults()
});


function calculateResults(){
    console.log(tipAmount);
    console.log(numOfPeople);
    console.log(billAmount);
    // Calculate Tip Amount per Person
    tipAmountPerPerson.innerHTML = billAmount*tipAmount/numOfPeople;

    // Calculate Tip Amount per Person
    let tip = (billAmount*tipAmount/numOfPeople).toFixed(2);
    tip = parseFloat(tip);
    tipAmountPerPerson.innerHTML = `$` + tip;

    // Calculate Total per Person
    total = (billAmount/numOfPeople) + tip;
    console.log(total);
    totalAmountPerPerson.innerHTML = `$` + total;
};

// BUTTONS BACKGROUND
let fivePercent = document.querySelector(".fivePercent");
let tenPercent = document.querySelector(".tenPercent");
let fifteenPercent = document.querySelector(".fifteenPercent");
let twentyFivePercent = document.querySelector(".twentyFivePercent");
let fiftyPercent = document.querySelector(".fiftyPercent");
let customPercent = document.querySelector(".customPercent");

let resetColours = function(){
    //change all existing colours and text to white on green
    fivePercent.style.backgroundColor = "hsl(183, 100%, 15%)";
    fivePercent.style.color = "hsl(0, 0%, 100%)"; //white

    tenPercent.style.backgroundColor = "hsl(183, 100%, 15%)";
    tenPercent.style.color = "hsl(0, 0%, 100%)"; //white

    fifteenPercent.style.backgroundColor = "hsl(183, 100%, 15%)";
    fifteenPercent.style.color = "hsl(0, 0%, 100%)"; //white

    twentyFivePercent.style.backgroundColor = "hsl(183, 100%, 15%)";
    twentyFivePercent.style.color = "hsl(0, 0%, 100%)"; //white

    fiftyPercent.style.backgroundColor = "hsl(183, 100%, 15%)";
    fiftyPercent.style.color = "hsl(0, 0%, 100%)"; //white

    customPercent.style.backgroundColor = "hsl(185, 41%, 84%)";

}


let setColour = function(buttonName){
    //Reset Colours
    resetColours();
    
    // change the colour of the specific button to green on cyan
    buttonToChange = document.querySelector(`.${buttonName}`);
    buttonToChange.style.backgroundColor = "hsl(172, 67%, 45%)";
    buttonToChange.style.color = "hsl(183, 100%, 15%)";
}


let resetButton = document.querySelector(".reset-button");

resetButton.addEventListener("click", function(){
    //reset the colour of the buttonscolours
    resetColours();

    billInput.value = "";
    numOfPeopleInput.value = "";
    customInput.value = "";

    //reset the tip to 1
    tipAmount = 0;
    numOfPeople = 1;
    billAmount = 0;

    tipAmountPerPerson.innerHTML = "$0.00";
    totalAmountPerPerson.innerHTML = "$0.00";
})










