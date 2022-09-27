


async function main(){

    
 try{
    let query = document.getElementById("query").value;

    // console.log(query);

    let url = `https://www.omdbapi.com/?s=${query}&page=1&apikey=79d5eae9`

    let res = await fetch(url);

    let data = await res.json();

    console.log('data',data);

    // return data.Search;
    if(data.Search!==undefined){

        myapend(data.Search);
    }
   

}catch(err){

    console.log("err",err);
}
}

let movie = document.getElementById('main');

 
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

        let yor = document.createElement('h2');
        yor.innerText =`Year: ${ el.Year}`;

        let imdb = document.createElement('p');
        imdb.innerText =`IMDB-ID: ${ el.imdbID}`;

        filmdetail.append(title,yor,imdb);

        mainmovie.append(film,filmdetail);

        movie.append(mainmovie);
    });
}


// -------- DEBOUNCE --------------

let id;

function debounce(func,delay){
    
    if(id){
        clearTimeout(id);
    }

     id = setTimeout(function(){

        func();   //our main function
    },delay);
}
