

class user{

    // step -1

    constructor(n){

        this.organisation = 'Masai';
    }

    // step-3

    validateUsername(username){

    //     // if username includes symbols '#' ,invalid user

    //     if(username.includes('#')){
    //         return false;
    // }
    // else {
    //     return true;
    // }


    // use ternery operator in if else conditions same as line no 15-24

    let value = username.includes('#') ? false : true;
    return value;
}

validatePassword(password){
    let value = password.includes('123') ? false : true;
    return value;
}


    // Write method -------
    //  step-2
    SignUp(username, password){

        // we need to validate the data
        let isValidated = false;

        // to validate we are validating the username and password;

    }
}

let u1 = new user('utkarsh');

console.log('u1',u1)