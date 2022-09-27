import crnav from "../components/navbar.js";

console.log(crnav);

document.getElementById("navbar").innerHTML = crnav();

import { getData,apend }  from "../components/fetch.js";



const url = "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"


const search = async() =>{
    let query = document.getElementById("query").value;

    const url =`www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

    console.log(query);

    getData(url).then((res)=>{
        apend(res,cont)
    })
}

let cont = document.getElementById("container");

getData(url).then((res)=>{

    console.log("res",res);
    apend(res,cont);
})



























// let getdata = async (url) =>{
      
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data);
// }