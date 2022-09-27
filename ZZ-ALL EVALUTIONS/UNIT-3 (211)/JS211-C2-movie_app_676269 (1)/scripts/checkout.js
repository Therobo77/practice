// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time





let obj = JSON.parse(localStorage.getItem("movie"));
// console.log('obj',obj);


let display = (obj) => {
    
    let cont = document.getElementById('movie');
    // cont.innerHTML = null;
    console.log('cont',obj);

   
        let main = document.createElement('div');
        main.setAttribute('class', 'movie_tab');

        let img=document.createElement("img");
        img.src=obj.Poster;

        let p=document.createElement("p");
        p.innerText=obj.Title;

       
        main.append(img,p);
        cont.append(main);
    
}
display(obj);


let amount = JSON.parse(localStorage.getItem("amount"));

let amnt = document.getElementById('wallet');
amnt.innerHTML = amount;
console.log('abcd',amount);


let confirm = ()=>{
    let seat= document.getElementById('number_of_seats').value;
    console.log(seat*100);
    if(seat*100>amount){
        alert('Insufficient Balance!');
    }
    else{
        amount=amount-seat*100;
        localStorage.setItem('amount',JSON.stringify(amount));
        console.log(amount);
        alert("Booking successfull!");
        window.location.reload();
    }
}

