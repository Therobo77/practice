async function addProduct(){
    
    // accpet value;

    let id = document.getElementById('id').value;
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;

    let send_this_data ={
        id: id,
        title: title,
        author: author
    }

    // one more way to do this

    // let send_this_data ={
    //     id,
    //     title,
    //     author
    // }

    // argument in fetch(URL,{ })


    let res = await fetch(`http://localhost:3000/posts`,{

    method:'POST',
    body: JSON.stringify(send_this_data),
    headers: {'Content-Type': 'application/json'},
    // payload:
    // package:

    })
    console.log('res',res);
}



 async function deletePost(){
    let id= document.getElementById('id_delete').value;

    let res = await fetch(`http://localhost:3000/posts/${id}`,{
        method:'DELETE',
        headers: {'Content-Type': 'application/json'},
    });
    console.log('res',res);
}



async function putPost(){
    let id= document.getElementById('put_id').value;

    let res = await fetch(`http://localhost:3000/posts/${id}`,{
        method:'PUT',
        headers: {'Content-Type': 'application/json'},
    });
    console.log('res',res);
}


async function patchPost(){
    let id= document.getElementById('patch_id').value;

    let res = await fetch(`http://localhost:3000/posts/${id}`,{
        method:'PATCH',
        headers: {'Content-Type': 'application/json'},
    });
    console.log('res',res);
}
