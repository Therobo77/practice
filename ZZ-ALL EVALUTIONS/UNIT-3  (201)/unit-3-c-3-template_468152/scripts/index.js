// Store the wallet amount to your local storage with key "amount"



let paisa = document.getElementById('wallet');
let sum = JSON.parse(localStorage.getItem('amount')) || 0;
// let sum = 0;
function savemoney(){
    let amount = document.getElementById('amount').value;
    sum+=+(amount);
    
    localStorage.setItem('amount',JSON.stringify(sum));
    
    console.log(sum)

}

// let paisa = document.getElementById('wallet');
paisa.innerHTML = sum;
