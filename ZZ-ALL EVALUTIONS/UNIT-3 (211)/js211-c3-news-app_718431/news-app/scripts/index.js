/*
Save the user to local storage with key
 "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

function myuser(n,i,e,c) {
    this.name= n;
    this.image= i;
    this.email= e;
    this.country= c;
}

let details = JSON.parse(localStorage.getItem("user")) ;

let submit = () => {

    let name = document.getElementById('name').value;
    let image = document.getElementById('image').value;
    let email = document.getElementById('email').value;
    let country = document.getElementById('country').value;

    details = new myuser(name, image, email, country);

    localStorage.setItem('user',JSON.stringify(details));
    console.log(details);
    
    document.getElementById('name').value=null;
    document.getElementById('image').value=null;
    document.getElementById('email').value=null;
    document.getElementById('country').value=null;
   
}