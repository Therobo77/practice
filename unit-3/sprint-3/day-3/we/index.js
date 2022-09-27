// class student {
//     constructor(name,id) {
//         this.name = name;
//         this.id = id;   
//     };
//     signup(userName,passWord){
//         // validation of userName and passWord as per the rules below
//         let isValidated = false;
//         // validating userName and &validating passWord 
//     //     login(userName,passWord) {
//     //         if(userName===this.usserName&&passWord===this.passWord){
//     //             console.log('logged in!!');
//     //     }
//     //     else{
//     //         console.log('Authentication Failed!!!');
//     //     }
//     // }
//     }
// }
// let s1 = new student('pablo',1);
// s1.signup('pablo123','password')
// s1.login('pablo123','password');
// console.log('s1',s1);



// SMS : Student Management System

let students = [] // storing all sign up data to the students data base

// create user data
class User{
    #password;
     // # can privatize the data that is called Encapsulation
    constructor(name, id){
        this.name = name;
        this.id = id;
    }

    signUp(username, password){

        //validate username and password as per rules

        let isValidated = false; // this function is false by default untill user sign up successfully

        isValidated = this.#validateUsername(username) && this.#validatePassword(password);

        if(isValidated){
            // line no 35 and 36 are adding key value pairs below name and id in to users data
            this.username = username;
            this.#password = password;
            console.log("User registered successfully");

            students.push(this); // add user data to students data base

        }else{
            console.log("Please follow username or password as per rules");
        }
    }

    #validateUsername(username){
        // some rules
        return true;
    }

    #validatePassword(password){
        // some rules
        return true;
    }


    logIn(username, password){

        if(username === this.username && password === this.#password){
            console.log("Loged In!");
        }else{
            console.log("Authentication Failed!");
        }
    }
}

// create students data out of User data
class student extends User{
    //borrowing property from user which is call Inharitance
    constructor(name, id, assignments){
        super(name, id); // super is the tool to inharitate parents data to child or instance
        this.numOfAssignments = assignments || 0 // numOfAssignments will no accessable by User. [only students can]
    }

    submitAssignments(){
        this.numOfAssignments++;
    }
}

// create a Admin  from User [student can not be admin]
class Admin extends User{

    constructor(name, id){
        super(name, id);
    }
    removeStudent(id){
        students = students.filter((elem) => {
            return elem.id !==id; // removing student using filter method
        })
    }
}


// creating User/students/Admin data 


let s1 = new student("kashif", 1, 16);
s1.signUp("kashif rezwi", "rezwi007");
// console.log(s1);
// // s1.logIn("kashif rezwi", "rezwi007");//succesfull
// s1.logIn("kashif rezwi", "Rezwi007");// failed!

let s2 = new student("aakarsh", 2, 15);
s2.signUp("aakarsh", "aakarsh123");

let s3 = new student("amardeep", 3, 17);
s3.signUp("amardeep", "amardeep890");
// console.log(s3)
s3.submitAssignments();
s3.submitAssignments();



let admin = new Admin("Nrupul", "3");
admin.signUp("Nrupul", "nrupul789");
admin.logIn("Nrupul", "nrupul789");
admin.removeStudent(1);
console.log(students);