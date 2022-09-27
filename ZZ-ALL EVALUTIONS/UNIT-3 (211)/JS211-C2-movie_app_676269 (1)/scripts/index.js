// Store the wallet amount to your local storage with key "amount"

let amount = JSON.parse(localStorage.getItem("amount")) || 0;

let add_to_wallet = ()=>{
    let amnt = document.getElementById("amount").value;

    amount+= +(amnt);
    localStorage.setItem("amount", amount);

    document.getElementById("amount").value= null;
    window.location.reload();
}

let wallet = document.getElementById("wallet");
wallet.innerText = amount;