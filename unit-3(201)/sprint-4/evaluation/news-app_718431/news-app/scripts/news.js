let data = JSON.parse(localStorage.getItem("news"));
append(data);
console.log(data);
function append(data) {
  let box = document.getElementById("detailed_news");
  let img = document.createElement("img");
  img.src = f = data.urlToImage;
  let title = document.createElement("h3");
  title.innerText = data.title;
  let p = document.createElement("h4");
  p.innerText = data.description;
  let div = document.createElement("div");
  div.append(img, title, p);
  box.append(div);
}