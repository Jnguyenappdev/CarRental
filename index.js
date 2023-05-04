//basic car rental 29.99/day
//30% surcharge under 25
"use strict";
window.onload = function ( ){
    
}
const buttonEl = document.getElementById('estimateBtn');
buttonEl.onclick = onButtonClicked;

function onButtonClicked(){
    const inputEl = document.getElementById("pickUpDate2");
    //console.log(inputEl.value);
    let carPerday = 29.99
    let numDays = document.getElementById('numDays2')
    let carRental = numDays.value * carPerday

    let baseP = 0;
    if (document.getElementById('tollTag').checked){
        baseP += 3.95;
    }  if (document.getElementById('gps').checked){
        baseP += 2.95;
    }  if (document.getElementById('roadside').checked){
        baseP += 2.95;
    }
    let optionstotal = baseP * numDays.value

    let baseP2 = 0
    if (document.getElementById('yes').checked){

        baseP2 += 30/100
    }
    

    let UnderAgeF = (baseP2 * carRental) 

   let grandTotal = UnderAgeF + optionstotal + carRental

   let carRentalEl = document.getElementById('carRentalTA')
   carRentalEl.innerHTML = `$ ${carRental.toFixed(2)}`
   
   let optionsEl = document.getElementById('optionsTA')
   optionsEl.innerHTML = `$ ${optionstotal.toFixed(2)}`
   
   let radioEl = document.getElementById('underAge')
   radioEl.innerHTML = `$ ${UnderAgeF.toFixed(2)}`
   
   let totalAmount = document.getElementById('totalDue')
   totalAmount.innerHTML= `$ ${grandTotal.toFixed(2)}`
}

