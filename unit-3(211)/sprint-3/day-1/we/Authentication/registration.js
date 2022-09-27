// base data 
const base_Url = 'https://masai-api-mocker.herokuapp.com'
// end point = "/auth/register"
let Register = async () => {
  let  name= document.getElementById('name').value;
  let  email= document.getElementById('email').value;
  let  password= document.getElementById('password').value;
  let username= document.getElementById('username').value;
  let mobile= document.getElementById('mobile').value;
  let description= document.getElementById('description').value;

    let form_data = {name,email,password,username,mobile,description};

    let res = await fetch(`${base_Url}/auth/register`,{
        method: 'POST',
        body: JSON.stringify(form_data),
        headers: {
            "Content-Type": "application/json",
        },
    });

    res = await res.json();
    console.log(res);
    window.location.reload();
    alert('Successful registration');
}


// // ---------login---------

// let Login = async () =>{
   
//     let password= document.getElementById('login_password').value;
//     let usernam= document.getElementById('login_username').value;

//     let login_data ={password,usernam}
//     // url-https://masai-api-mocker.herokuapp.com/
//     // sub url - auth/login
//     let res = await fetch (`${base_Url}/auth/login`,{
//         method: 'POST',
//         body: JSON.stringify(login_data),
//         // mode: 'no cors',
//         headers: {'Content-Type': 'application/json'},
//     });
//     let data = await res.json();
//     console.log('data',data);

//     // call the getprofile function

//     let {username} = login_data;  // descructure of the object login_data;
//     let {token} = data;  // descructure of the object data;

//     // getProfile(username,token)   //pass the username and token to the getProfile function
// }




let Login = async () =>{
    let login_data ={
        "password": document.getElementById('login_password').value,
        "username": document.getElementById('login_username').value, 
    }
    // url-https://masai-api-mocker.herokuapp.com/
    // sub url - auth/login
    let res = await fetch(`${base_Url}/auth/login`,{
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
    let res = await fetch(`${base_Url}/user/${username}`,{
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
    });
    let data = await res.json();
    console.log('data',data);
    window.location.reload();
    alert(`${data.name} your login is successful and your username is ${data.username}`)
    // location.href="Admin.html"
    
}


