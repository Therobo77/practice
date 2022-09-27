function Product(name,brand,price,description) {
  // Complete the constructor function

this.name=name;
this.brand=brand;
this.price=price;
this.description=description;
this.sold=false;
}
let x = new Product("Shoe", "Puma", 5000, "Sport shoe");


Product.prototype.changePrice=function(price){
  this.price=price
}

const y=new Product()
y.changePrice(10000)


Product.prototype.toggleStatus=function(sold){
  this.sold= !this.sold
}


  const z=new Product();
z.toggleStatus(true)
// Create these two methods in Product prototype :-
// changePrice
// toggleStatus

// Do not change this
export default Product;


// function Product(name,brand,price,description) {
//   // Complete the constructor function
//   this.name=name,
//   this.brand=brand,
//   this.price=price,
//   this.description=description,
//   this.sold= false

// }

// const obj=new Product('Shouse',"Nike",2000,"it is comfortable")

// Product.prototype.changePrice=function(price){
//   this.price=price
// }

// const x = new Product()

// x.changePrice(10000)
// // Create these two methods in Product prototype :-
// // changePrice
// // toggleStatus

// // Do not change this

// Product.prototype.toggleStatus =function(){
//   this.sold=!this.sold
// }

// const y=new Product()

// y.toggleStatus(true)

// export default Product;