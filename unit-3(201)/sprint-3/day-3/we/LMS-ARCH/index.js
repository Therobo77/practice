
let users = [];
class user{
        #password
    // step -1

    constructor(){

        this.organisation = 'Masai';
    }

    // step-3

    #validateUsername(username){
        // ---------------------------------------------
    //     // if username includes symbols '#' ,invalid user
    //     if(username.includes('#')){
    //         return false;
    // }
    // else {
    //     return true;
    // }
// ----------------------------------------------------------
    // use ternery operator in if else conditions same as line no 15-24

    let value = username.includes('@') ? false : true;
    return value;
}

#validatePassword(password){
    let value = password.includes('123') ? false : true;
    return value;
}
// step--3  LOGIN--

Login(username, password){
    if(username===this.username&&password===this.#password){

        console.log("Login successful");
    }
    else{
        console.log("Login failed");
    }
}

    // Write method -------
    //  step-2
    SignUp(username, password){

        // we need to validate the data
        let isValidated = false;

        // to validate we are validating the username and password;

        isValidated = this.#validateUsername(username) && this.#validatePassword(password);

        if(isValidated){
            this.username = username;
            this.#password = password;

            console.log('user registered successfully');
            users.push(this);
        }
        else{
            console.log('user not registered ');
        }

    }
}

let u1 = new user();
let u2 = new user();

// u1.SignUp('pablo','pablo123'); //output---- user not registered

// u1.SignUp('pablo','pablo453');  // output--- user registered successfully
// u2.SignUp('vikash','vikash3454'); 
// console.log('u1',u1)
// console.log(users)
// console.log('u1-password--',u1.password)
// console.log('u1-username--',u1.username)

// ----- login  

// u1.Login('pablo','pablo453')


//  Creating userSide here user is student

class Student extends user{


    constructor(){

        super();
        this.numOfAssignments = 0;
    }

    submitAssignments(){

        this.numOfAssignments++;
        console.log('%c Accepted','color:green')
    }
}


//  ------ FOR ADMIN____

class Admin extends user{

    constructor(){
        super();
    }

    removePerson(username){
        // remove person with given username
        user.filter((element)=>{

            return element.username !== username;
        })
    }
}

let s1 = new Student();

s1.SignUp('vikash','Vanshu@88');
s1.Login('vikash','Vanshu@88');

s1.submitAssignments();
s1.submitAssignments();
s1.submitAssignments();

console.log('number of ass',s1.numOfAssignments);