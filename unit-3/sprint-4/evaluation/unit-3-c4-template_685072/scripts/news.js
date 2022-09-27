// Ude Import export (MANDATORY)


import navbar  from "../components/navbar.js";

document.getElementById("navbar").innerHTML= navbar();




// step 2 container



import { getData,apend }  from "./fetch.js";

const url =`https://masai-api.herokuapp.com/news?q=tesla`

let cont=document.getElementById('results');

getData(url).then((res)=>{
   console.log(res);

   apend(res,cont);
})