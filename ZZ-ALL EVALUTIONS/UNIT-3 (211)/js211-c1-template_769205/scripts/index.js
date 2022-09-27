/*
Use local storage as your database. And store data with key as "mobile_data". The mobile object will be :-
{
brand: String,
name: String,
price: Number,
image: String
}

Example:- 
{
brand: "apple", (oneplus/nokia)
name: "Iphone 13",
price: 74000,
image: "https://www.iphone.com/image.jpg"
}

*/

function product(b,n,p,i){
    this.brand = b;
      this.name = n;
      this.price = p;
      this.image=i;
    }
    
  
  let mypr = JSON.parse(localStorage.getItem('mobile_data')) || [];
    let addProduct = ()=>{

      let brand = document.getElementById("mobile_brand").value;
      let name = document.getElementById("mobile_name").value;
      let price = document.getElementById("mobile_price").value;
      let image = document.getElementById("mobile_image").value;
  
      let myob = new product(brand,name,price,image);
  
      mypr.push(myob);
      
      localStorage.setItem('mobile_data', JSON.stringify(mypr));
      console.log('abc',mypr);
      
      document.getElementById("mobile_brand").value = null;
      document.getElementById("mobile_name").value = null;
      document.getElementById("mobile_price").value = null;
     document.getElementById("mobile_image").value = null;
    }