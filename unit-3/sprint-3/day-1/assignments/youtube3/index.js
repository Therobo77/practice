


// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=thor&key=AIzaSyAdYBcGJ3cgdgAdpKYbt1K5M5ab737K7cs

const API_KEY = "AIzaSyAdYBcGJ3cgdgAdpKYbt1K5M5ab737K7cs"

let search = async ()=>{
    let query = document.getElementById("query").value;
   // getData(query);
     let data=await getData(query);//
     //apend(data);
}

let getData = async (query)=>{
    let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&key=${API_KEY}`

    let res= await fetch(url);
    let data= await res.json();
    localStorage.clear();
    localStorage.setItem('youtubemain',JSON.stringify(data.items));
    apend(data.items);
    // console.log(data);

    return data.items;
};


store=()=>{

    let youtubemain=JSON.parse(localStorage.getItem('youtubemain'));
    if (youtubemain) apend(youtubemain);
}

store();

  function apend(data){
    let container=document.getElementById("container");
    container.innerHTML=null;

    data.forEach((el) => {
        let img=document.createElement("img");
        img.src=el.snippet.thumbnails.medium.url;

        let h3=document.createElement("h3");
        h3.innerText=el.snippet.title;
         console.log(el,"ok");
        let div=document.createElement("div");

        div.onclick=()  =>{
            savevideo(el);
        }

        div.setAttribute("class","video");

        div.append(img,h3);             //saying div.apend is not a function;
        container.append(div);
    });
}


let savevideo = (data)=> {
    localStorage.setItem("video",JSON.stringify(data));

    window.location.href = 'video.html';
};



let filter = async () => {
    let data = await getData(q);
    console.log(data);
    data = data.filter((el) => {
      return el.snippet.channelId === "UCvC4D8onUfXzvjTOM-dBfEA";
    });
    append(data);
  };


