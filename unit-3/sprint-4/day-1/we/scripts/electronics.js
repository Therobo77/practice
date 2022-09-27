

import navbar  from "../components/navbar.js";

// console.log(navbar);
import {getData,apend} from "./fetch.js";

document.getElementById("navbar").innerHTML = navbar();

 const url =`https://fakestoreapi.com/products/category/electronics`

 let cont=document.getElementById('container');

 getData(url).then((res)=>{
    console.log(res);

    apend(res,cont);
 })


// let getdata = async () => {
//     let res = await fetch(url);

//     let data = await res.json();

//     console.log(data);
//     append(data);
// };

// getdata();

// let append =(data) => {

//     let cont=document.getElementById('container');
    
//     data.forEach(({image, title, price}) => {

//         let img = document.createElement('img');
//         img.src = image;

//         let tit = document.createElement('p');
//         tit.innerText=title;

//         let h4=document.createElement('h4');
//         h4.innerText = price;

//         let box = document.createElement('div');
//         box.append(img,tit,h4);

//         cont.append(box);
//     });

// };