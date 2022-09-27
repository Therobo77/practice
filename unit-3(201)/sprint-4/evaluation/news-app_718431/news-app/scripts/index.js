/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
// }
// */
// function Allproducts (n,i,e,c){
//     this.name = n;
//     this.image =i;
//     this.email = e;
//     this.country = c;
// } 


// let user = JSON.parse(localStorage.getItem('user')) || [];

//  function Vsubmit(){
//     user = [];
//     let name = document.getElementById('name').value;
//     let image = document.getElementById('image').value;
//     let email = document.getElementById('email').value;
//     let country = document.getElementById('country').value;

//     let prdtc = new Allproducts(name, image, email, country);

//     user.push(prdtc);

//     localStorage.setItem('user', JSON.stringify(user));

//     console.log(user);

//  }


/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

let submit = () => {
    let form = document.querySelector("form");
    let img = form.image.value;
    let name = form.name.value;
    let email = form.email.value;
    let country = form.country.value;
    let data = {
      img: img,
      name: name,
      email: email,
      country: country,
    };
  
    localStorage.setItem("user", JSON.stringify(data));
    document.getElementById("myform").reset();
  };