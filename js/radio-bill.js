// get a reference to the sms or call total elements
const callsTotalTwoElem = document.querySelector('.callTotalTwo');
const smsTotalTwoElem = document.querySelector('.smsTotalTwo');
const totalCostTwoElem = document.querySelector('.totalTwo');

// get a reference to the add button
const radioBillAddBtn = document.querySelector('.radioBillAddBtn');

//create a variable that will keep track of the total bill
const textTotalAddBtnElem = document.querySelector('.textTotalAddBtn')
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var callsTotal = 0;
var smsTotal = 0;

function radioBillTotal(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
        if (billItemType === "call"){
            callsTotal += 2.75
        }
        else if (billItemType === "sms"){
            smsTotal += 0.75;
        }
    }
   
    //update the totals that is displayed on the screen.
    callsTotalTwoElem.innerHTML = callsTotal.toFixed(2);
    smsTotalTwoElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostTwoElem.innerHTML = totalCost.toFixed(2);
    
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostTwoElem.classList.add("danger");
        totalCostTwoElem.classList.remove("warning");
    }
    else if (totalCost >= 30){
        totalCostTwoElem.classList.add("warning");
        totalCostTwoElem.classList.remove("danger");
    }
    else{
        totalCostTwoElem.classList.remove("warning", "danger")
    }
}
radioBillAddBtn.addEventListener('click', radioBillTotal)
