// xstep1 navbar
import navbar  from "../components/navbar.js";

console.log(navbar);

document.getElementById("navbar").innerHTML = navbar();

// step 2 container

import { getData,apend }  from "./fetch.js";

const url =`https://fakestoreapi.com/products`

let cont=document.getElementById('container');

getData(url).then((res)=>{
   console.log(res);

   apend(res,cont);
})
