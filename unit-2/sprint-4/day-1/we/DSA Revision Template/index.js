document.querySelector("form"),addEventListener("submit",myfun);
let arr=JSON.parse(localStorage.getItem("data")) || []
window.addEventListener("load",function (){
    displaytable(arr)
})
// if(localStorage.getItem("data")==null){
//     arr=[];
// }else{
//     arr=JSON.parse(localStorage.getItem("data"))
// }

function myfun(event){
    event.preventDefault()
   
    let obj={queName:document.querySelector("#title").value,
    queLink:document.querySelector("#link").value,
    queLevel:document.querySelector("#difficulty").value
       };
       arr.push(obj);
       displaytable(arr)
       localStorage.setItem("data",JSON.stringify(arr))
}
function displaytable(arr){
    document.querySelector("tbody").innerHTML="";
    arr.forEach(function(elem){
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        td1.innerText=elem.queName;
        let td2=document.createElement("td");
        td2.innerText=elem.queLink;
        let td3=document.createElement("td");
        td3.innerText=elem.queLevel
        let td4=document.createElement("td");
        if(td3.innerText=="Easy"){
            td4.innerText="NO";
        }else if (td3.innerText=="Medium" || "Hard"){
         td4.innerText="YES";
    
        }
        let td5=document.createElement("td");
        td5.innerText="DELETE"
        td5.style.backgroundColor="red"
        td5.style.cursor="pointer"
    
        td5.addEventListener("click", del)
       
        tr.append(td1,td2,td3,td4,td5);
       document.querySelector("tbody").append(tr)
        
    })

}
function del(event){
    event.target.parentNode.remove()
}