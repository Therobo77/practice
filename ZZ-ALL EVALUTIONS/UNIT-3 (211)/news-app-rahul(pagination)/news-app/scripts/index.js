/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

function submitcf(i,n,e,c){
this.image = i,
this.name = n,
this.email = e,
this.country = c
}
function submit(){
    let image = document.getElementById('image').value;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let country = document.getElementById('country').value;

    let u1 = new submitcf(image,name,email,country);

    localStorage.setItem('user',JSON.stringify(u1));
}