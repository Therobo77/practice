function apend(){

    let data= JSON.parse(localStorage.getItem("student")) || [];
    

    let body=document.getElementById("tbody");
    // body.innerHTML=null;    //for apending again and again

   

    data.forEach(function(el,index){
        let tr = document.createElement("tr");
        let td1=document.createElement("td");
        let img=document.createElement("img");
        img.src=el.image;

        let td2=document.createElement("td");
        td2.innerText=el.name;

        let td3=document.createElement("td");
        td3.innerText=el.course;

        let td4=document.createElement("td");
        td4.innerText=el.unit;

        let td5=document.createElement("td");
        td5.innerText=el.batch;

        let td6=document.createElement("button");
        td6.innerText="REMOVE";
        td6.style.backgroundColor="red";
       td6.addEventListener("click",function(){
        remove(index)
       })
       

        td1.append(img);
        // td6.append(btn);
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);
    });

}

apend();


// function remove(index) {
//     let data= JSON.parse(localStorage.getItem("student")) || [];

//     let newdata= data.filter(function(el,i){
//         if(i===index) {
//             let trash=JSON.parse(localStorage.getItem("trash")) || [];

//             trash.push(el);
//             localStorage.setItem("trash",JSON.stringify(trash));
//         }else{
//             i!==index;
//         }

//     });
//     localStorage.setItem("student",JSON.stringify(newdata));
//     apend();

// }






// let a=document.querySelector("#name").value
//     let b=document.querySelector("#employeeID").value
//     let c=document.querySelector("#department").value
//     let d=document.querySelector("#exp").value
//     let e=document.querySelector("#email").value
//     let f=document.querySelector("#mbl").value
    
//     let tr=document.createElement("tr")
//     let td1=document.createElement("td")
//     td1.innerText=a
//     let td2=document.createElement("td")
//     td2.innerText=b
//     let td3=document.createElement("td")
//     td3.innerText=c
//     let td4=document.createElement("td")
//     td4.innerText=d
//     let td5=document.createElement("td")
//     td5.innerText=e
//     let td6=document.createElement("td")
//     td6.innerText=f
    
//     let td7=document.createElement("td")
//     if(d>5){
//         td7.innerText="Senior"
//     }else if(d>1 && d<=5){
//         td7.innerText="Junior"
//     }else{
//         td7.innerText="Fresher"
//     }
//     let td8=document.createElement("td")
//     td8.innerText="Delete"
//     td8.style.backgroundColor="red"
//     td8.addEventListener("click",chkde)

//     tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
//     document.querySelector("tbody").append(tr)
// }