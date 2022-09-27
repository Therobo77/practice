
function userid(n,e,p){
    this.name = n;
    this.email = e;
    this.password = p;
}

let all_users = JSON.parse(localStorage.getItem('users')) || [];

let sign_up = ()=>{

    let nam = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let myobj = new userid(nam,email,password);

    all_users.push(myobj);

    localStorage.setItem('users', JSON.stringify(all_users));

    console.log('allProducts',all_users);

    document.getElementById('name').value= null;
    document.getElementById('email').value= null;
    document.getElementById('password').value= null;
}
