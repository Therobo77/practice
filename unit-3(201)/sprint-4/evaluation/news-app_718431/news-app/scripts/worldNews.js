import {append, getAll} from "./script/fetch.js";

let data = JSON.parse(localStorage.getItem("user"));
console.log(data);

let box = document.getElementById("news_result");
let url = `https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${data.country}`;
getAll(url).then((res) => {
  append(res, box);
});

document.getElementById("search").addEventListener("keydown", () => {
  if (event.code == "Enter") {
    let inp = document.getElementById("search").value;
    console.log(inp);
    let url = `https://masai-mock-api-2.herokuapp.com/news?q=${inp}`;
    getAll(url).then((res) => {
      append(res, box);
    });
  }
});

document.getElementById("in").addEventListener("click", () => {
  let url = `https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=in`;
  getAll(url).then((res) => {
    append(res, box);
  });
});
document.getElementById("ch").addEventListener("click", () => {
  let url = `https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=ch`;
  getAll(url).then((res) => {
    append(res, box);
  });
});
document.getElementById("us").addEventListener("click", () => {
  let url = `https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=us`;
  getAll(url).then((res) => {
    append(res, box);
  });
});
document.getElementById("uk").addEventListener("click", () => {
  let url = `https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=uk`;
  getAll(url).then((res) => {
    append(res, box);
  });
});
document.getElementById("nz").addEventListener("click", () => {
  let url = `https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=nz`;
  getAll(url).then((res) => {
    append(res, box);
  });
});