function user(){
    return append(userData)
}

let userData= JSON.parse(localStorage.getItem('user'))

function append(userData){
    let cont=document.getElementById('sidebar')
    let img= document.createElement('img')
    img.src=userData.image
    let name=document.createElement('h3')
    name.innerText=userData.name
    let email=document.createElement('p')
    email.innerText=userData.email
    let country=document.createElement('p')
    country.innerText=userData.country
    cont.append(img,name,email,country)
}

export default user