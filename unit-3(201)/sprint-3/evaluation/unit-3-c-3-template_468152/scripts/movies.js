// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
 
// let query = document.getElementById('search').value;
// console.log(query)

// function main() {
//     console.log(query)
// }

let sum = JSON.parse(localStorage.getItem('amount')) || 0;
let paisa = document.getElementById('wallet');
paisa.innerHTML = sum;



async function main(){

    
    try{
       let query = document.getElementById("search").value;
   
    //    console.log(query);
   
       let url = `https://www.omdbapi.com/?apikey=79d5eae9&s=${query}`
   
       let res = await fetch(url);
   
       let data = await res.json();
   
    //    console.log('data',data);
   
       // return data.Search;
       if(data.Search!==undefined){
   
           myapend(data.Search);
           // details(data.Search);
       }
   }catch(err){
   
       console.log("err",err);
   }
   }
   
   let movie = document.getElementById('movies');
   
    
   function myapend(data){
   
       movie.innerHTML = null;
   
       data.forEach(function(el){
   
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
           btn.addEventListener('click', function(){
            addhere(el);
           });

   
           filmdetail.append(title,btn);
   
           mainmovie.append(film,filmdetail);
          mainmovie.setAttribute('class', 'movie_tab');
   
           movie.append(mainmovie);
       });
   }

   let arr = JSON.parse(localStorage.getItem('movie')) || [];

   function addhere(el){
    // console.log('addhere');
    arr.push(el);
    
    localStorage.setItem('movie',JSON.stringify(arr));
    location.href = 'checkout.html';
   }
   console.log(arr);
//    addhere()
   





















   let id;
   
   function debounce(func,delay){
       
       if(id){
           clearTimeout(id);
       }
   
        id = setTimeout(function(){
   
           func();   //our main function
       },delay);
   }
   
   