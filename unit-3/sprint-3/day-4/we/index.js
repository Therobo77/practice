// write your javascript code here and  in your_search_term filesystem  directory   formatted   like this:  https://github.com/jquery/jquery                    

// 1.vehicle
// 2.parking lots
// 3.parking floors
// 4.ticket

// class Vehicle{
//     #type;
//     #color;
//     #regNumber;
//     constructor(type, color, regNumber){
//         this.#type = type;
//         this.#color = color;
//         this.#regNumber = regNumber;
//     }

//     // new topic geter and setter methods
//     get regNumber(){
//         return this.#regNumber;
//     }


// }

// // car, bikes,bus

// // super extends

// class car extends Vehicle{
//     constructor(color,num){

//         super('car',color,num);
//     }
// }


// class bike extends Vehicle{
//     constructor(color,num){

//         super('bike',color,num);
//     }
// }


// class bus extends Vehicle{
//     constructor(color,num){

//         super('bus',color,num);
//     }
// }

// let car1 = new car('black', 1234);

// console.log('car1:',car1.regNumber);
// let x=`MH${regNumber}`;




// class parkingLot{
//     #floors
//     constructor(number){

//         this.#floors = [];
//         this.numberOfFloors = number;

//         for(let i=0; i<number; i++){
//             // this.#floors[i] = new ParkingFloor();
//         }


//     }

//     findSlot(){
//         // type of vehicle $ empty slot

//         for (let i=0; i<this.numberOfFloors; i++) {

//             // itreating throughout the Slot

//             for(let slot of this.#floors[i]) {
//                 if(slot.type===type && slot.isBooked){
//                     return {floornumber:i,slot:slot}
//                 }
//             }
//         }
//     }









// }

// class ParkingFloor{
//     #floornumber;
//     constructor(floornumber,maxFloor){

//         this.#floornumber = floornumber;
//         this.parkingSpots = []

//         for(let i=0; i<maxFloor; i++){

//             if(i===0){
//               //  this.parkingSpots.push(new )
//             }

//         }
//     }

// }

// class Slot{

//     #isBooked;
//     constructor(type,number){

//         // 

//         this.number = number;
//         this.type = type;

//         this.#isBooked = false;
//     }

//     get isBooked(){
        
//     }

// }

// let p = new parkingLot(3);
// console.log('p:',p);



//1. vehicle
//2. parking lot
//3. parking floors
//4. ticket

class Vehicle {

    #type;
    #color;
    #regNumber


    constructor(type, color, num) {

        this.#type = type
        this.#color = color
        this.#regNumber = num

    }

    get regNumber() {

        return `MH ${this.#regNumber}`
    }

    get type(){

        return this.#type
    }

}


//car,bike,bus

//super, extends

class Car extends Vehicle {

    constructor(color, num) {

        super('Car', color, num)
    }

}


class Bike extends Vehicle {

    constructor(color, num) {

        super('Bike', color, num)
    }

}

class Bus extends Vehicle {

    constructor(color, num) {

        super('Bus', color, num)
    }

}

// let car1 = new Car('black',1234)




class ParkingLot {

    #floors;

    constructor(number) {

        this.#floors = []
        this.numberOfFloors = number

        for (let i = 0; i < number; i++) {

            this.#floors[i] = new ParkingFloor(i, number)

        }

    }

    findSlot(type) {
    console.log('type:', type)

        //type of vehicle & empty slot 

        for (let i = 0; i < this.numberOfFloors; i++) {

            //iterating through slots

            for (let slot of this.#floors[i].parkingSpots) {

                if (slot.type === type && !slot.isBooked) {

                    return { floornumber: i, slot: slot }

                }

            }


        }


        return false;
    }


    parkVehicle(vehicle) {


         let slot = this.findSlot(vehicle.type)

         slot.slot.book= true
      
        

    }
}


class ParkingFloor {

    #floornumber;

    constructor(floornumber, maxFloor) {

        this.#floornumber = floornumber
        this.parkingSpots = []

        for (let i = 0; i < maxFloor; i++) {

            //depending on floornumber push vehicle

            if (i === 0) {

                this.parkingSpots.push(new Slot('Bus', i))
            }
            else if (i == 1) {

                this.parkingSpots.push(new Slot('Bike', i))

            }
            else {
                this.parkingSpots.push(new Slot('Car', i))


            }


        }



    }


}



class Slot {

    #isBooked;

    constructor(type, number) {

        //number -> floornumber
        this.number = number
        this.type = type
        this.#isBooked = false

    }

    get isBooked(){

        return this.#isBooked
    }


    set book(bool)
{

    this.#isBooked = bool
}
}


let p = new ParkingLot(3)
console.log('p:', p)

let c1 = new Car('black',9999)

let b1 = new Bike('black',999)



p.parkVehicle(b1)
