

let getData = async (url) => {
    let res= await fetch(url);
    let data = await res.json();


    return data.articles;
};

let apend = (data, cont) => {

    data.forEach(({urlToImage,title,description})=>{

        let img = document.createElement('img');
        img.src =urlToImage;

        let t = document.createElement('h3');
        t.innerText = title;

        let p=document.createElement('p');
        p.innerText = description;

        let div = document.createElement('div');

        div.append(t,img,p);
        cont.append(div);


    })
};

export {getData,apend};

