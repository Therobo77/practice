async function getData(url){

try{
    let res = await fetch(url)
    let data = await res.json()

    return data;
}catch(err){
    console.log(err);
}

}

function apendData(data,container){

    data.forEach(function(el){

        let div = document.createElement("div");

        let p = document.createElement("p");
        let amnt = document.createElement("p");
        let img=document.createElement("img");

        img.src = el.image;
        p.innerText = el.title;
        amnt.innerText = el.price;
       
        div.append(img,p,amnt);

        container.append(div);
    });

}

export {getData,apendData} ;