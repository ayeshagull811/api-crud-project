// let username=[]
let container = document.getElementById("card-container");
let inputValues=document.getElementById("search");
let arry=[];
fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => {console.log(json)
           arry=json
           arr(json)
           searchbtn()
        }
    )
  
    
    
    function arr(username){
        
       container.innerHTML= username.map(element => `
        <div class=card >
        <h1>${element.name}</h1>
        <p>${element.email}</p>
        </div>`
      
       
       ).join("")
    }
    
    function searchbtn(){
        let filtervalues=arry.filter(Element => Element.name.toLowerCase().includes(inputValues.value.toLowerCase()))
       console.log("filter value", filtervalues)
       arr(filtervalues);
      
    }
   
    inputValues.addEventListener("input" ,searchbtn)
 
