// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let amount = JSON.parse(localStorage.getItem("amount"));

let amnt = document.getElementById('wallet');
amnt.innerHTML = amount;
console.log('abcd',amount);


let id;
let debounce=(func,delay)=>{
    if(id){
        clearTimeout(id);
    }
    id=setTimeout(()=>{
        func();
    },delay);
}

let main = async () => {
    let search=document.getElementById("search").value ;
    let url=`https://www.omdbapi.com/?apikey=facd0bf4&s=${search}`
    let res=await fetch(url);
    let data= await res.json();
    console.log('data',data)
    display(data.Search)
}
// main();

let display = (array) => {
    if(!array){
        return;
    }
    let cont = document.getElementById('movies');
    cont.innerHTML = null;
    console.log('cont');

    array.forEach((el) => {
        let main = document.createElement('div');
        main.setAttribute('class', 'movie_tab');

        let img=document.createElement("img");
        img.src=el.Poster;

        let p=document.createElement("p");
        p.innerText=el.Title;

        let button=document.createElement("button");
        button.innerText="Book now";
        button.onclick=function(){
            addd(el)
        };

        main.append(img,p,button);
        cont.append(main);
    });
}
// display();

let addd = (el) =>{
    console.log("addd",el);
    localStorage.setItem("movie", JSON.stringify(el));
    window.location.href = 'checkout.html';
}

