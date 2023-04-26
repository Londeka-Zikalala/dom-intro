// get a reference to the sms or call radio buttons
const callTotalSettingsElem = document.querySelector('.callTotalSettings');
const smsTotalSettingsElem = document.querySelector('.smsTotalSettings');
const totalSettingsElem = document.querySelector('.totalSettings');
// get refences to all the settings fields
const callCostSettingElem = document.querySelector('.callCostSetting');
const smsCostSettingElem = document.querySelector('.smsCostSetting');
const warningLevelSettingElem =document.querySelector('.warningLevelSetting');
const criticalLevelSettingElem = document.querySelector('.criticalLevelSetting');
//get a reference to the add button
const billWithSettingsAddBtn = document.querySelector('.billWithSettingsAddBtn');
//get a reference to the 'Update settings' button
const updateSettingsBtn = document.querySelector('.updateSettings');
// create a variables that will keep track of all the settings
var callCostSetting = 0;
var smsCostSetting = 0;
var warningLevelSetting = 0;
var criticalLevelSetting = 0;
// create a variables that will keep track of all three totals.
var callsTotal = 0;
var smsTotal = 0;
var total = 0;
//add an event listener for when the 'Update settings' button is pressed
//updateSettingsBtn.addEventListener(click, function())
//add an event listener for when the add button is pressed
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
function billWithSettingsTotal(){
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn){
        var billItemTypeWithSettings = checkedRadioBtn.value
        // billItemTypeWithSettings will be 'call' or 'sms'
        if (billItemTypeWithSettings === "call"){
            callsTotal += 2.75
        }
        else if (billItemTypeWithSettings === "sms"){
            smsTotal += 0.75;
        }
    }
   //update totals
    total = callsTotal + smsTotal;
  callTotalSettingsElem.innerHTML = callsTotal.toFixed(2);
  smsTotalSettingsElem.innerHTML = smsTotal.toFixed(2);
  totalSettingsElem.innerHTML = total.toFixed(2);
  
  if (total >= criticalLevelSetting) {
    totalSettingsElem.classList.remove("warning");
    totalSettingsElem.classList.add("danger");
  } else if (total >= warningLevelSetting) {
    totalSettingsElem.classList.remove("danger");
    totalSettingsElem.classList.add("warning");
  } else {
    totalSettingsElem.classList.remove("warning", "danger");
  }
}

billWithSettingsAddBtn.addEventListener('click', billWithSettingsTotal);

billWithSettingsAddBtn.addEventListener('click', billWithSettingsTotal)

