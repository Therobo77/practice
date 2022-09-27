function car(name,brand,price,color){
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.color = color;
}

car.prototype.run = function(){
    return `${this.brand} ${this.name} is running`;
};

export default car;
/*
{
    name: 'X7',
    brand:'BMW',
    price: '1.5cr',
    color: 'black',
}
*/