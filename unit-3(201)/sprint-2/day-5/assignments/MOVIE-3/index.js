

async function main() {

    try{
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=trending&key=AIzaSyAdYBcGJ3cgdgAdpKYbt1K5M5ab737K7cs`
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
main();


let cont = document.getElementById('container');
function apendAll(element){
   cont.innerHTML = [];
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
       cont.append(mainmovie);


    });
}
