// let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c47bf400840de3be9d1f68cbb51de197&units=metric`

function getwether(){

    // console.log('url');

    let city = document.getElementById('city').value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c47bf400840de3be9d1f68cbb51de197&units=metric`
    
    console.log('url',url);

    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log("data",data);
        apenddata(data)
    })
    .catch(function(err){
        console.log("error",err);
    });

    city.innerText = [];

}

let container = document.getElementById("container");

function apenddata(el){

    container.innerHTML =[];

    let h1 = document.createElement("h1");
    h1.innerText = `CITY:-  ${el.name}`;

    temp =document.createElement("p");
    temp.innerText =`TEMP: ${el.main.temp}`;

    temp_min =document.createElement("p");
    temp_min.innerText =`TEMP_MIN: ${el.main.temp_min}`;

    temp_max =document.createElement("p");
    temp_max.innerText =`TEMP_MIN: ${el.main.temp_max}`;

    let map= document.getElementById("gmap_canvas");

    map.src=`https://maps.google.com/maps?q=${el.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`


    container.append(h1,temp,temp_max,temp_min);
}

// main: {temp: 304.96, feels_like: 309.5, temp_min: 304.96, temp_max: 304.96, pressure: 1001,

