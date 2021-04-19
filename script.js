"use strict";

const S = document.querySelector.bind(document);


function compute()
{
    let principal = parseFloat(S("#principal").value);
    let rate =      parseFloat(S("#rate").value) ;
    let years =     parseInt(S("#years").value);
    let result =    S("#result");


    let interest  = 0;
    let date = new Date();
    let total_years = date.getFullYear() + years;

    if(isNaN(principal) || principal <= 0 ){
        alert("Enter a positive number");
        S("#principal").focus();
        return;
    }else if(isNaN(years)){
        alert("Invalid Years");
        return;

    }

    interest = principal * ( rate * 0.01 ) * years;
    let message = `If you deposit ${principal} <br/>
                    at an interest rate of ${rate}% <br/>
                    You will receive an amount of ${interest}<br/>
                    in the year ${total_years}
    `;
    result.innerHTML = message;
}


window.onload = function(){

    S("#rate").oninput = function(){

        S("#rate_val").innerText = this.value;
    };


};