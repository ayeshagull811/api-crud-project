// const users = [
//     { 
//      id: 1,
//      name: "John",
//      age: 25,
//      email: "john@example.com",
//      isActive: true,
//      tags: ["developer",
//             "javascript"] 
//     },
//     { 
//      id: 2,
//      name: "Jane",
//      age: 32,
//      email: "jane@example.com",
//      isActive: false,
//      tags: ["designer",
//             "css"] 
//     },
//     { 
//      id: 3,
//      name: "Bob",
//      age: 41,
//      email: "bob@example.com",
//      isActive: true,
//      tags: ["developer",
//             "python"] 
//     },
//     { 
//      id: 4,
//      name: "Mary",
//      age: 28,
//      email: "mary@example.com",
//      isActive: true,
//      tags: ["manager",
//             "leadership"] 
//     },
//     { 
//      id: 5,
//      name: "Alex",
//      age: 19,
//      email: "alex@example.com",
//      isActive: false,
//      tags: ["intern",
//     "student"] 
//     }
//     ];
//     // Write a function that returns all active users
//     // let activeuser=users.filter((Element)=>{
//     //     return Element.isActive ==true
//     // })
//     // console.log(activeuser)
//     // Write a function that returns an array containing just the names of all users
//     // let usersname=users.map(NAME);
//     // function NAME(Element){
//     //     return Element.name 
//     // }
//     // console.log(usersname)
//     // Write a function that finds and returns a user by their ID
//     // let userid=users.find(ID)
//     // function ID(Element){
//     //     return Element.id==3
//     // }
//     // console.log(userid)

//     // Write a function that checks if all users are active
//     // let activeusers=users.every(active);
//     // function active(Element){
//     //      return Element.isActive==true
//     // }
//     // console.log(activeusers)
//     // Write a function that calculates the average age of all users
// //     let avgages=users.reduce(ages,0)/users.length;
// //     function ages(accumulator , element){
// //    return accumulator + element.age
// //  }
//     // console.log(avgages)
//     // Write a function that returns users who are active and older than a specified age
    
//     // let activeUser=users.filter(element);
//     // function element(active){
//     //     return active.isActive==true && active.age >30;
//     // }
//     // console.log(activeUser)
    const products = [
        { 
         id: 101,
         name: "Laptop",
         price: 999.99,
         category: "electronics",
         stock: 15
         },
        {
         id: 102,
         name: "Smartphone",
         price: 699.99,
         category: "electronics",
         stock: 25
         },
        {
         id: 103,
         name: "Book",
         price: 19.99,
         category: "books",
         stock: 50 
        },
        {
          id: 104,
          name: "Headphones",
          price: 149.99,
          category: "electronics",
          stock: 10 
        },
        {
         id: 105,
         name: "T-shirt",
         price: 29.99,
         category: "clothing",
         stock: 100 
        },
        { 
         id: 106,
         name: "Shoes",
         price: 79.99,
         category: "clothing",
         stock: 30
        }
        ];
//         // products.map(element => element.address)
//         // console.log(products)
// // Write a function that returns all products sorted by price (low to high)
    let prices=products.sort(elements);
function elements(a,b){
    return a.price-b.price
}
console.log(prices)
// // // Write a function that transforms the users array into an object where the keys are the user ids
// // for (const i of products) {
// //     console.log(i.id)
// //  }
// // products.forEach((value , index) =>{
    
// //     console.log("this is value", value)
// //      console.log(index + ":"+ value)
    
// //     console.log(`${index} : ${JSON.stringify(value)}`)
// // });

// function transformUsersToObject(element) {
//     const result = {};
//     for (const user of element) {
//       result[user.id] = user;
//     }
//     console.log(result);
    
//     //  return result;
//   }

//  transformUsersToObject(products);
// // console.log(transformed);
  
// // let objectids=products.forEach(product);
// // function product(value , index){
// //     return value
// // }
// // console.log( objectids)
// let categories=[]
// for(let i = 0 ; i < products.length ; i++){
//   let product = products [i].category;
//   if(categories[product])
//     categories[product]++;
//   else{
//     categories[product]=1;
//   }
// }
// console.log(categories)
// // Write a function that returns the emails of active users sorted by age (youngest first)
// let activeusersemail =[];
// for(let i=0 ; i< users.length ; i++){

//   if(users[i].isActive===true){

//     activeusersemail.push(users[i].email)
//   }
// }
// console.log(activeusersemail)
// let sortage=users.filter(user => user.isActive).sort((a , b )=> a.age - b.age)

// console.log(sortage);
// //logical operaters
// let a = 5;
// let b = 7;
// let cond1 =a==b;
// let cond2 =b>9
// console.log("a&&b", cond1 && cond2);
//get user input number using prompt and make a condition that thee input number is divisble by 5
// let number = prompt("inter number")
// // number%5===0?"divisible by 5":"not divible by 5"
// if(number %5 ===0){
//   console.log(true)
// }
// else{
//   console.log(false)
// }
// let score=75
// if(score >= 80 && score==100){
//    console.log("grqade A")
// }
// else if(score >=70 && score <= 79){
//   console.log("grade B")
// }
// else if(score >=60 && score <= 69){
//   console.log("grade C")
// }
// else if(score >=50 && score <= 59){
//   console.log("grade D")
// }
// else if(score >=40 && score <= 49){
//   console.log("grade E")
// }
// else if(score >=30 && score <= 39){
//   console.log("grade F")
// }