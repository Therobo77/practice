// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks
document.querySelector("form").addEventListener("submit",sunoji);

function sunoji(event){
    event.preventDefault();

    let photo=document.querySelector("#image").value;
    let stname=document.querySelector("#name").value;
    let batch=document.querySelector("#batch").value;
    let dsa=document.querySelector("#dsa").value;
    let cs=document.querySelector("#cs").value;
    let coding=document.querySelector("#coding").value;
    //console.log(photo,stname,batch,dsa,cs,coding)
    let obtmarks=(Number(dsa)+Number(cs)+Number(coding));
    let percent=obtmarks/30*100
    console.log(percent)
    
    let row=document.createElement("tr");
let body=document.querySelector("tbody").append(row);

let td1=document.createElement("td");
let img=document.createElement("img");
img.setAttribute("src",photo);
td1.append(img);



let td2=document.createElement("td");
td2.innerText=stname;

let td3=document.createElement("td");
td3.innerText=batch;

let td4=document.createElement("td");
td4.innerText=dsa;

let td5=document.createElement("td");
td5.innerText=cs;

let td6=document.createElement("td");
td6.innerText=coding;

let td7=document.createElement("td");
td7.innerText=percent.toFixed(2);

let td8=document.createElement("td");
if(percent>50){
    td8.innerText="Regular"
    td8.style.background="green"
}
else{
    td8.innerText="Async"
    td8.style.background="red"
}
let td9=document.createElement("td");
td9.innerText="DELETE"
td9.style.background="red"
td9.style.color="white"
td9.addEventListener("click",kashif);

function kashif(event){
    event.target.parentNode.remove()
}
row.append(td1,td2,td3,td4,td5,td6,td7,td8,td9)

}
