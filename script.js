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
    let message = `If you deposit <span class="highlight">${principal}</span> <br/>
                    at an interest rate of <span class="highlight">${rate}%</span>  <br/>
                    You will receive an amount of <span class="highlight">${interest}</span> <br/>
                    in the year <span class="highlight">${total_years}</span> 
    `;
    result.innerHTML = message;
}


window.onload = function(){

    S("#rate").oninput = function(){

        S("#rate_val").innerText = this.value;
    };


};