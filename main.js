const bill = document.getElementById('bill-input');
const numberPeople = document.getElementById('number-people');
const errorText = document.getElementById('error-text');
const custom = document.getElementById('custom-percent');
function onClickPrecent(percent) {
    const totalPerson = document.getElementById('total');
    const tipPerson = document.getElementById('tip');
    let total = parseInt(bill.value) / parseInt(numberPeople.value);
    let tip = parseFloat((percent / parseInt(bill.value)) * 100);
    let totalBill = total + tip;
    if(bill.value == "" && numberPeople.value == "0"){
        errorText.style.display = "block";
    }else if(numberPeople.value >= "1" && custom.value == ""){
        totalPerson.innerHTML = "$" + totalBill.toFixed(2);
        tipPerson.innerHTML = "$" + tip.toFixed(2);
    }else if(numberPeople.value >= "1" && custom.value !== ""){
        totalPerson.innerHTML = "$" + totalBill.toFixed(2);
        tipPerson.innerHTML = "$" + tip.toFixed(2);    
    }
}






