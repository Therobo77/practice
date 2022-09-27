// import user from "../components/profile.js"
// user()
let newsdata= JSON.parse(localStorage.getItem('new'));
console.log(newsdata);

let cont = document.querySelector("#show_news")

let div = document.createElement("div");
// div.setAttribute("class", "news");
let img = document.createElement("img");
img.src = newsdata.urlToImage;
let title = document.createElement("h3");
title.innerText = newsdata.title
let desc = document.createElement("h4");
desc.innerText = newsdata.description;

div.append(img,title,desc);
cont.append(div);