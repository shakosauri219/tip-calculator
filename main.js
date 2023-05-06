const bill = document.getElementById('bill-input');
const numberPeople = document.getElementById('number-people');
const errorText = document.getElementById('error-text');
const custom = document.getElementById('custom-percent');
const totalPerson = document.getElementById('total');
const tipPerson = document.getElementById('tip');
const button = document.getElementById('reset');


function onClickPrecent(percent) {
    if(numberPeople.value == ""){
        errorText.style.display = "block";
    }else if(numberPeople.value >= "1" && custom.value == ""){
        let tip = (percent / parseInt(bill.value)) * 100 / parseInt(numberPeople.value);
        let total = ((parseInt(bill.value) / parseInt(numberPeople.value)) + tip);
        totalPerson.innerHTML = "$" + parseFloat(total.toFixed(2));
        tipPerson.innerHTML = "$" + parseFloat(tip.toFixed(2));
    }
}


custom.addEventListener('input', () => {
    if(numberPeople.value == ""){
        errorText.style.display = 'block';
    }else if(numberPeople.value !== ""){
        errorText.style.display = 'none';
    }
    if(numberPeople.value >= "1" && custom.value >= "1"){
        let tip = (custom.value / parseInt(bill.value)) * 100 / parseInt(numberPeople.value);
        let total = ((parseInt(bill.value) / parseInt(numberPeople.value)) + tip);
        totalPerson.innerHTML = "$" + parseFloat(total.toFixed(2));
        tipPerson.innerHTML = "$" + parseFloat(tip.toFixed(2));
    }
});


button.addEventListener('click', () => {
    bill.value = "";
    custom.value = "";
    numberPeople.value = "";
    totalPerson.innerHTML = "$0.00";
    tipPerson.innerHTML = "$0.00";
});







