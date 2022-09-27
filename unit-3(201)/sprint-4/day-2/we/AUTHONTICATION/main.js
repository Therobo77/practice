let Register = async () =>{

    // collect all the Data

    let Register_data = {
        "name": document.getElementById('name').value,
        "email": document.getElementById('email').value,
        "password": document.getElementById('password').value,
        "username": document.getElementById('username').value,
        "mobile": document.getElementById('mobile').value,
        "description": document.getElementById('description').value 
      };

    //   base url -https://masai-api-mocker.herokuapp.com/

    // sub url  - auth/register
    // main url -https://masai-api-mocker.herokuapp.com/auth/register

    let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{

    method: 'POST',
    body: JSON.stringify(Register_data),
    headers: {
        'content-type': 'application/json',

    },
    });

    let data = await res.json();
    console.log('data',data);
    window.location.reload();
};



// ---------login---------

let Login = async () =>{
    let login_data ={
        "password": document.getElementById('login_password').value,
        "username": document.getElementById('login_username').value,

       
    }
    // url-https://masai-api-mocker.herokuapp.com/
    // sub url - auth/login
    let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
        method: 'POST',
        body: JSON.stringify(login_data),
        headers: {'Content-Type': 'application/json'},
    });
    let data = await res.json();
    console.log('data',data);

    // call the getprofile function

    let {username} = login_data;  // descructure of the object login_data;
    let {token} = data;  // descructure of the object data;

    getProfile(username,token)   //pass the username and token to the getProfile function
}


//  ------ get profile--------


let getProfile = async(username,token)=>{
    // username
    // url-https://masai-api-mocker.herokuapp.com/
    // sub url - user/<username>
    let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
    });
    let data = await res.json();
    console.log('data',data);
    
    alert(`${data.name} your login is successful and your username is ${data.username}`)
    
}