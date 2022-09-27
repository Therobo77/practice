
let id;
function debounce(func,delay){

if(id){
clearTimeout(id);
}
id = setTimeout(function(){
    func();
},delay);

}


async function main() {

    try{
    let query = document.getElementById("query").value;
    // console.log("query:", query);
 
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&key=AIzaSyAdYBcGJ3cgdgAdpKYbt1K5M5ab737K7cs`
    let res = await fetch(url);

    let data = await res.json();
    console.log(data);
    apendAll(data.items);
    // fulldetails(data.items);
    }
    catch(err){
        console.log(err);
    }
}
let main1 = document.getElementById('main');
function apendAll(element){
    main1.innerHTML = [];
    element.forEach(function(item){

        let mainmovie = document.createElement('div');

        let poster = document.createElement('div');
        let img=document.createElement("img");
        img.src = item.snippet.thumbnails.medium.url;

        poster.append(img);

        let detail = document.createElement("div");

        let h4 = document.createElement("h4");
        h4.innerText = `Title: ${item.snippet.title}`;

        let h5 = document.createElement("h5");
        h5.innerText = `Publish Time: ${item.snippet.publishedAt}`;

        detail.append(h4,h5);

        mainmovie.append(poster,detail);
        main1.append(mainmovie);


        mainmovie.addEventListener('click', function(e){
            fulldetails(e);
        })

    });
}

let cont = document.getElementById('container');

function fulldetails(e){

    let mainmovie = document.createElement('div');

        let poster = document.createElement('div');
        let img=document.createElement("img");
        img.src = e.snippet.thumbnails.medium.url;

        poster.append(img);

        let detail = document.createElement("div");

        let h4 = document.createElement("h4");
        h4.innerText = `Title: ${e.snippet.title}`;

        let h5 = document.createElement("h5");
        h5.innerText = `Publish Time: ${e.snippet.publishedAt}`;

        detail.append(h4,h5);

        mainmovie.append(poster,detail);
        cont.append(mainmovie);

        console.log('details');

}

fulldetails()