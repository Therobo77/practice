// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&key=AIzaSyAdYBcGJ3cgdgAdpKYbt1K5M5ab737K7cs

const API_KEY = "AIzaSyAdYBcGJ3cgdgAdpKYbt1K5M5ab737K7cs"

let search = async () => {

    try{

        let query = document.getElementById("query").value;

        let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&key=${API_KEY}`

        let res = await fetch(url);

        let data = await res.json();
        console.log(data);
        apendvideo(data.items);
       

    }
    catch(err){
        console.log(err);
    }
};

let cont = document.getElementById('container');

let apendvideo = (element)=> {

    cont.innerHTML = [];

    element.forEach(({snippet:{title,thumbnails:{high:{url}}}}) => {
        
        let main = document.createElement('div');

        let image = document.createElement('div');
        let img = document.createElement('img');
        // img.src = el.snippet.thumbnails.high.url;
        img.src = url;
        image.append(img);

        let titl = document.createElement('p');
        titl.innerText = title;

        main.append(image,title);
        cont.append(main);
    });
};