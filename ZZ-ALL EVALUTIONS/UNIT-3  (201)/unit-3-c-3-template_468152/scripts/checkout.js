// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

// let sum = JSON.parse(localStorage.getItem('amount')) || 0;
// let paisa = document.getElementById('wallet');
// paisa.innerHTML = sum;

let sum = JSON.parse(localStorage.getItem('amount')) || 0;
let paisa = document.getElementById('wallet');
paisa.innerHTML = sum;


let arr = JSON.parse(localStorage.getItem('movie')) || [];


let movie = document.getElementById('movie');
   
    movie.innerHTML = null;

    arr.forEach(function(el){

        let mainmovie = document.createElement('div');

        let film = document.createElement('div');

        let poster= document.createElement('img');
        poster.src = el.Poster;

        film.append(poster);

        let filmdetail = document.createElement('div');

        let title = document.createElement('h3');
        title.innerText =`Movie: ${ el.Title}`;

        let btn = document.createElement('button');
        btn.innerText ='book now';
        btn.setAttribute('class', 'book_now');
        btn.addEventListener('click', function(el){
         addhere(el);
        });


        filmdetail.append(title,btn);

        mainmovie.append(film,filmdetail);
       mainmovie.setAttribute('class', 'movie_tab');

        movie.append(mainmovie);
    });

    

    function confirm(){

        let num = document.getElementById('number_of_seats').value;

        if(sum>=num*100){
            sum = sum - num*100;
        }

    }
    
