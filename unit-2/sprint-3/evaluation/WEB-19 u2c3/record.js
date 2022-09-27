// fill in javascript code here

document.querySelector("form").addEventListener("submit",bolo_Jubaan_Kesari)

function bolo_Jubaan_Kesari(event){
    event.preventDefault();

    let a=document.querySelector("#name").value
    let b=document.querySelector("#employeeID").value
    let c=document.querySelector("#department").value
    let d=document.querySelector("#exp").value
    let e=document.querySelector("#email").value
    let f=document.querySelector("#mbl").value
    
    let tr=document.createElement("tr")
    let td1=document.createElement("td")
    td1.innerText=a
    let td2=document.createElement("td")
    td2.innerText=b
    let td3=document.createElement("td")
    td3.innerText=c
    let td4=document.createElement("td")
    td4.innerText=d
    let td5=document.createElement("td")
    td5.innerText=e
    let td6=document.createElement("td")
    td6.innerText=f
    
    let td7=document.createElement("td")
    if(d>5){
        td7.innerText="Senior"
    }else if(d>1 && d<=5){
        td7.innerText="Junior"
    }else{
        td7.innerText="Fresher"
    }
    let td8=document.createElement("td")
    td8.innerText="Delete"
    td8.style.backgroundColor="red"
    td8.addEventListener("click",chkde)

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
    document.querySelector("tbody").append(tr)
}
function chkde(event){
    event.target.parentNode.remove();
}