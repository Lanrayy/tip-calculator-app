// TIP AMOUNT RESULTS
let tipAmountPerPerson = document.querySelector(".tip-amount-result-display");
let totalAmountPerPerson = document.querySelector(".total-result-display");
let billInput = document.querySelector(".bill-input");
let numOfPeopleInput = document.querySelector(".num-of-people");
let billAmount = 0;
let tipAmount = 1;
let numOfPeople = 1;

// BILL INPUT
billInput.addEventListener("input", function(){
    console.log(billInput.value);
    billAmount = billInput.value;
    calculateResults();
});


//TIP AMOUNT
function submit(element, num){
    console.log(num)
    tipAmount = num/100;
    console.log(tipAmount);
    calculateResults();
    let buttonName = element.classList[0];
    setColour(buttonName);
    let list = element.classList
    console.log(list);

}

// NUMBER OF PEOPLE
numOfPeopleInput.addEventListener("input", function(){
    numOfPeople = numOfPeopleInput.value;
    calculateResults()
});


function calculateResults(){
    console.log(tipAmount);
    console.log(numOfPeopleInput.value);
    // Tip Amount
    tipAmountPerPerson.innerHTML = billAmount*tipAmount/numOfPeople;
};

// BUTTONS BACKGROUND
let fivePercent = document.querySelector(".fivePercent");
let tenPercent = document.querySelector(".tenPercent");
let fifteenPercent = document.querySelector(".fifteenPercent");
let twentyFivePercent = document.querySelector(".twentyFivePercent");
let fiftyPercent = document.querySelector(".fiftyPercent");


let setColour = function(buttonName){
    console.log(buttonName);

    //change existing colour to green
    fivePercent.style.backgroundColor = "hsl(183, 100%, 15%)"
    tenPercent.style.backgroundColor = "hsl(183, 100%, 15%)"
    fifteenPercent.style.backgroundColor = "hsl(183, 100%, 15%)"
    twentyFivePercent.style.backgroundColor = "hsl(183, 100%, 15%)"
    fiftyPercent.style.backgroundColor = "hsl(183, 100%, 15%)"


}

//CALCULATIONS
/*
Tip amount per person = bill amount * percentage / number of people

*/







// tipAmountResult.innerHTML = `$`+












