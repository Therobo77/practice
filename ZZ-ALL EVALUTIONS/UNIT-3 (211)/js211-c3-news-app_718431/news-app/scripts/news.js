
import sidebar from './components/sidebar.js'

console.log('sidebar',sidebar);
sidebar();

let news = JSON.parse(localStorage.getItem("news"));


let rendorDOM = (el)=>{
    let cont = document.getElementById('container');
    cont.innerHTML = null;

        let image = document.createElement('img');
        image.src =el.urlToImage;

        let title = document.createElement('h3');
        title.innerText = el.title;


        let desc = document.createElement('h4');
        desc.innerText = el.description;

        
        cont.append(image,title,desc);
    
}

rendorDOM(news)