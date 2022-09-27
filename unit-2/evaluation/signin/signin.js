let dataFromLS=JSON.parse(localStorage.getItem("data"))
document.querySelector("form").addEventListener("submit",click)

function click(event){
    event.preventDefault()
    dataFromLS.forEach(function(elem){
    let Email=document.querySelector("#email").value;
    let Password=document.querySelector("#password").value;

    // console.log(email2)
    // console.log(password)
    if(Email==elem.Email && Password==elem.Password){
        alert("successfully Signup")
    }else{
        alert("Failed")
    }

   
})

}