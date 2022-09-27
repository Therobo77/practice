// import user from "../components/profile.js"
// user()

let data = JSON.parse(localStorage.getItem("user"));
let pagData = [];
let country = data.country;

let url = `https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=`;

async function getNews(query = country) {
  let response = await fetch(`${url}${query}`);
  let data = await response.json();
  // console.log(data.articles);
  pagData = data.articles;

  append(0);
  // console.log(pagData)
}

getNews();
// console.log(pag)

function getvalue(id) {
  country = id;
  getNews(country);
}

function append(index) {
  let cont = document.getElementById("news_container");
  cont.innerHTML = null;

  let start = 5 * index;
  let end = start + 5;

  let dataPerPage = pagData.slice(start, end);
  // console.log(dataPerPage)

  dataPerPage.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("class", "news");
    let img = document.createElement("img");
    img.src = el.urlToImage;
    let title = document.createElement("h4");
    title.innerText = el.title;
    let auth = document.createElement("p");
    auth.innerText = el.author;
    div.onclick = () => {
      localStorage.setItem("new", JSON.stringify(el));
      window.location.href = "./news.html";
    };
    div.append(img, title, auth);
    cont.append(div);
  });
  showButtons(index + 1);
}
let inp = document.getElementById("search");
inp.addEventListener("keypress", function (event) {
  // event.preventDefault();
  let value = inp.value;
  if (event.key == "Enter") {
    let url2 = `https://masai-mock-api-2.herokuapp.com/news?q=${value}`;
    //  console.log(url2);
    getData(url2);
  }
});
async function getData(url2) {
  let response = await fetch(url2);
  let data = await response.json();
  // console.log(data.articles);
  pagData=data.articles
  console.log(pagData);
  append(0);
}

let showButtons = (page) => {
  let btns = document.getElementById("buttons");
  btns.innerHTML = null;
  let start = 1;
  if (page > 2) {
    start = page - 1;
  }
  for (let i = start; i <= start + 2; i++) {
    // console.log(data.length/10)
    if (i > Math.ceil(pagData.length / 5)) {
      // console.log("rahul")
      return;
    }
    let b = document.createElement("button");
    b.innerText = i;
    b.onclick = () => {
      append(i - 1);
    };
    btns.append(b);
  }
};

// console.log(Math.ceil(19/5));

// pagination

// console.log(pag)

// let data=[]
// let getdata= async ()=>{
//     let res= await fetch(url);
//     res= await res.json();
//     return res
// }

// let main= async()=>{
//     data= await getdata();
//     renderDom(0)

//     //   console.log(data)
// }
// main()

// let renderDom=(index)=>{
// let cont= document.getElementById("container");
// cont.innerHTML=null;

// let start=10*index;
// let end= start + 20;

// let per_page_data= data.slice(start,end);
// // console.log(per_page_data);
// per_page_data.forEach(({id,name})=>{
// let p= document.createElement("p");
// p.innerText=`${id} ${name}`;
// cont.append(p);
// });
// showButtons(index+1)
// }

// let showButtons = (page)=>{
//     let btns= document.getElementById("buttons");
//     btns.innerHTML=null;
//     let start =1;
//      if(page>4){
//         start=page-2;
//      }
//     for(let i=start; i<=start+4; i++){
// // console.log(data.length/10)
//         if(i>data.length/20){
//             break
//         }
//         let b= document.createElement("button")
//         b.innerText=i
//         b.onclick=()=>{
//           renderDom(i-1)
//         }
//         btns.append(b)
//     }
// }
