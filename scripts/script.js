//SET VARIABLE
let tipAmountPerPerson = document.querySelector(".tip-amount-result-display");
let totalAmountPerPerson = document.querySelector(".total-result-display");
let billInput = document.querySelector(".bill-input");
let customInput = document.querySelector(".custom-input");
let numOfPeopleInput = document.querySelector(".num-of-people");
let billAmount = 0;
let tipAmount = 0;
let numOfPeople = 1;

//TIP AMOUNT
function submit(element, num){
    tipAmount = num/100;
    let buttonName = element.classList[0];
    setColour(buttonName);
    calculateResults();
};

//WHEN THE VALUE OF THE BILL INPUT CHANGES, CALCULATE THE RESULTS
billInput.addEventListener("input", function(){
    billAmount = parseFloat(billInput.value).toFixed(2);
    calculateResults();
});

//WHEN THE VALUE OF THE NUMPER OF PEOPLE INPUT CHANGES, CALCULATE THE RESULTS
numOfPeopleInput.addEventListener("input", function(){
    numOfPeople = parseInt(numOfPeopleInput.value, 10);
    calculateResults()
});

//IF A USER ENTERS ZER0 SHOW THE CANT BE ZERO MESSAGE
//REMOVE IT IF THE USER ENTERS A NUMBER THAT IS NOT ZERO
numOfPeopleInput.addEventListener("input", function(){
    if(numOfPeopleInput.value == 0){
        document.querySelector(".cant-be-zero").style.display = "flex";
    }

    if(numOfPeopleInput.value != 0){
        document.querySelector(".cant-be-zero").style.display = "none";
    }
});

//WHEN THE VALUE OF THE CUSTOM INPUT CHANGES, CALCULATE THE RESULTS
customInput.addEventListener("input", function(){
    tipAmount = customInput.value/100;
    calculateResults();
});


function calculateResults(){
    //If the number of people input element has a value of zero
    if(numOfPeopleInput.value == 0){
        document.querySelector(".num-of-people-input-container").style.border = "2px solid red"
        tipAmountPerPerson.innerHTML = "$0.00";
        totalAmountPerPerson.innerHTML = "$0.00";
    }
    else{
        document.querySelector(".num-of-people-input-container").style.border = "none"
        // Calculate the tip per person and display the result
        let tip = ((billAmount*tipAmount)/numOfPeople);
        tip = tip.toFixed(2); // returns a string
        tip = parseFloat(tip);
        tipAmountPerPerson.innerHTML = `$` + tip;

        // Calculate the total per person and display the result
        let totalBillPerPerson = (billAmount/numOfPeople);
        totalBillPerPerson.toFixed(2);
        totalBillPerPerson = parseFloat(totalBillPerPerson);
        total = (totalBillPerPerson + tip);
        totalAmountPerPerson.innerHTML = `$` + total;
    }
};

// BUTTONS BACKGROUND
let fivePercent = document.querySelector(".fivePercent");
let tenPercent = document.querySelector(".tenPercent");
let fifteenPercent = document.querySelector(".fifteenPercent");
let twentyFivePercent = document.querySelector(".twentyFivePercent");
let fiftyPercent = document.querySelector(".fiftyPercent");
let customPercent = document.querySelector(".customPercent");


//Reset coluur of all the buttons 
//This fucntion is used in the reset button function
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

    customPercent.style.border = "1px solid hsl(185, 41%, 84%)";
};


//This function sets the colour of the button that is clicked on 
let setColour = function(buttonName){
    //Reset Colours
    resetColours();
    
    // change the colour of the specific button to green on cyan
    buttonToChange = document.querySelector(`.${buttonName}`);
    buttonToChange.style.backgroundColor = "hsl(172, 67%, 45%)";
    buttonToChange.style.color = "hsl(183, 100%, 15%)";
};

//If the reset button is clicked
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
});


//If the bill input is focused, change the border colour
billInput.addEventListener("focus", function(){
    document.querySelector(".bill-container").style.border = "2px solid hsl(172, 67%, 45%)"
});


//If the no. of people input is focused, change the border colour
numOfPeopleInput.addEventListener("focus", function(){
    document.querySelector(".num-of-people-input-container").style.border = "2px solid hsl(172, 67%, 45%)"
});






