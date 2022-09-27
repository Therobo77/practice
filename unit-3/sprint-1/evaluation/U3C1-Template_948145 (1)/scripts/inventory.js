
function apend(){
    let hema = JSON.parse(localStorage.getItem("data")) || [];

    let div=document.getElementById("products_data");

    hema.forEach(function(el,index){
        let img=document.createElement("img");
        img.src = el.img;
    })
    div.apend(img)
}