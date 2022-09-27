let form = document.getElementById("form");
let name=document.getElementById("name").value;
name.localStorage.getItem("users",JSON.stringify(users));
let email=document.getElementById("email").value;
name.localStorage.getItem("users",JSON.stringify(users));
let password=document.getElementById("password").value;
name.localStorage.getItem("users",JSON.stringify(users));
let submit = document.getElementById("submit");

let save =()=>{
  data=localStorage.getItem("users",JSON.stringify(users));
}