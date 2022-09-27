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
        // console.log("data",data);
        apenddata(data)
    })
    .catch(function(err){
        console.log("error",err);
    });

    city.innerText = [];

}

function getforcast(){


    let url = `http://api.weatherapi.com/v1/forecast.json?key=af066970b7e24ad29d8205242220408&q=07112&days=7`
    
    console.log('url',url);

    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log("data11",data);
        apendForcast(data)
    })
    .catch(function(err){
        console.log("error",err);
    });

}
getforcast()

// getforcast()

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


// --------- for forecast ------------

let forcast = document.getElementById("forcast");
// forcast.innerHTML = "vikash";
// let f_div = document.createElement("div");
// f_div.innerText = "vikash";

// forcast.append(f_div)


function apendForcast(main){

    // -------- for forcast -----------

    // main.forecast.forecastday.forEach(function)

    for(let i=0; i<7; i++){

        let f_div = document.createElement("div");

        let date = document.createElement("p");

    date.innerText = `DATE: ${main.forecast.forecastday[i].date}`
    
    let temp = document.createElement("h2");
    temp.innerText = `Temp-${main.forecast.forecastday[i].day.avgtemp_c} C`;

    let logo = document.createElement("img");
    logo.src = "http://cdn.weatherapi.com/weather/64x64/night/122.png"
    logo.style.position = "absolute";
    logo.style.marginLeft = "75px";


    let hum = document.createElement("p");
    hum.innerText = `Humidity : ${main.current.humidity}`

    let cl = document.createElement("p");
    cl.innerText = ` Cloud: ${main.current.cloud}`;

    let prs = document.createElement("p");
    prs.innerText =`Pressure: ${main.current.pressure_mb} Mb`

    let prs_mm = document.createElement("p");
    prs_mm.innerText =`Rain: ${main.current.precip_mm} mm`
    

    f_div.append(date,temp,logo,hum,cl,prs_mm,prs);

    forcast.append(f_div);
    

    console.log("res")

    }
    

    
    
}

// apendForcast()

// main: {temp: 304.96, feels_like: 309.5, temp_min: 304.96, temp_max: 304.96, pressure: 1001,

