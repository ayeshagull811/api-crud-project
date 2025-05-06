let users=[]
let editUser;
let userdata=document.getElementById("usersdata")
let userApi="https://jsonplaceholder.typicode.com/users"
fetch(userApi)
.then(response => response.json())
.then(data => {console.log(data)
 users=data
 console.log(users);
 userlist(users)
})
let inputnames=document.getElementById("inputname").value;
let inputemail=document.getElementById("inputage").value;

function Addusers(id){
    // let inputnames=document.getElementById("inputname").value;
    // let inputemail=document.getElementById("inputage").value;
   
    if(editUser){
      let editUsers=users.find((element)=>element.id===editUser)
      editUsers.name=inputnames
      editUsers.email=inputemail
   
      editUser=""
    }else{
        users.push({name:inputnames,email:inputemail ,id: Date.now()})

        fetch( userApi , {
            method: 'POST',
            body: JSON.stringify({name:inputnames,email:inputemail}),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
    }
   
   
    console.log("input name",inputnames);
    console.log("input email",inputemail);
   userlist(users)
   document.getElementById("inputname").value=""
   document.getElementById("inputage").value=""
}
function userlist(users){
    userdata.innerHTML=users.map((element ) => `
         <li>NAME:${element.name}<br>EMAIL:${element.email}</li>
         <button  onclick="editbtn(${element.id})">EDIT</button>
         <button onclick="deletebtn(${element.id})">DELETE</button>
        `
    ).join("")
}

function deletebtn(id){
    // users.splice(id-1,1);
    userlist(users);
    fetch(`${userApi}/${id}`, {
        method: 'DELETE',
      });
  let filterid=users.filter(element => element.id !==id)
  userlist(filterid)
}
function editbtn(id){
    let editUsers= users.find((element) => element.id===id)
    document.getElementById("inputname").value=editUsers.name
    document.getElementById("inputage").value=editUsers.email
    editUser=id;
    fetch(`${userApi}/${id}`, {
        method: 'PUT',
        body: JSON.stringify({name:inputnames,email:inputemail}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    })
    
    console.log("edit users name:",editUsers);
    
    console.log("users name:",users)
}