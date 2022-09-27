import sidebar from './components/sidebar.js'

console.log('sidebar',sidebar);
sidebar();
// let nside=document.getElementById('sidebar');
// nside.innerHTML=sidebar();


let details = JSON.parse(localStorage.getItem("user"));

let getData = async(code) => {

    let cr_url =`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${code}`
    let res = await fetch(cr_url);
    res =await res.json();
    console.log('res',res.articles);
    rendorDOM(res.articles);
};
getData(details.country);

let rendorDOM = (array)=>{
    let cont = document.getElementById('container');
    cont.innerHTML = null;

    array.forEach((el) => {
        let main = document.createElement('div');
        main.addEventListener('click', function(){
            new_wala_page(el);
        });

        let image = document.createElement('img');
        image.src =el.urlToImage;

        let div2 = document.createElement('div');
        let author = document.createElement('h2');
        author.innerText = el.author;

        let title = document.createElement('h3');
        title.innerText = el.title;
        div2.append( author, title)

        main.append(image,div2);
        cont.append(main);
    });
}

let new_wala_page = (el) => {
    localStorage.setItem('news', JSON.stringify(el));
    window.location.href = 'news.html';
    console.log('new_wala_page',el);
}

let search = document.getElementById("search");
search.addEventListener("keypress", function(event) {
	 if (event.key === "Enter") {
        search_here()
     }
});
let search_here = async() => {
    let query = search.value;
    let url =`https://masai-mock-api-2.herokuapp.com/news?q=${query}`
    let res = await fetch(url);
    res =await res.json();
    console.log('res',res.articles);
    rendorDOM(res.articles);
};
let ind_btn = document.getElementById('in');
ind_btn.addEventListener('click', function() {
    getData('in');
    console.log('getData');
})

let us_btn = document.getElementById('us');
us_btn.addEventListener('click', function() {
    getData('us');
    console.log('getData');
})

let ch_btn = document.getElementById('ch');
ch_btn.addEventListener('click', function() {
    getData('ch');
    console.log('getData');
})

let uk_btn = document.getElementById('uk');
uk_btn.addEventListener('click', function() {
    getData('uk');
    console.log('getData');
})

let nz_btn = document.getElementById('nz');
nz_btn.addEventListener('click', function() {
    getData('nz');
    console.log('getData');
})

// let allins =(id) => {
//     getData(id);
//     console.log('getData',id);
// }
// // allins();


// let image = document.getElementById("image");
// image.src = details.image;

// let Uname = document.getElementById("name");
// Uname.innerText = details.name;

// let email = document.getElementById("email");
// email.innerText = details.email;

// let country = document.getElementById("country");
// if (details.country=='in'){
//     country.innerText = 'INDIA';
// }
// else if (details.country=='us'){
//     country.innerText = 'USA';
// }
// else if (details.country=='ch'){
//     country.innerText = 'CHINA';
// }
// else if (details.country=='uk'){
//     country.innerText = 'UK';
// }
// else if (details.country=='nz'){
//     country.innerText = 'NEWZELEND';
// }
