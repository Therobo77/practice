let array = JSON.parse(localStorage.getItem('users'));
let login = false;

let log_in = ()=> {
    let emailc = document.getElementById('email').value;
    let passwordc = document.getElementById('password').value;

    for(let i = 0; i < array.length; i++) {

        if(array[i].email === emailc&&array[i].password === passwordc){
            alert("Login successful!");
            login = true;
            localStorage.setItem('login', JSON.stringify(login))
        }

        else if(array[i].email === emailc&&array[i].password !== passwordc){
            alert("Wrong credentials");
            
        }
        else if(array[i].email !== emailc&&array[i].password === passwordc){
            alert("User doesn't exist, Sign Up");
            
        }
        
    }

}