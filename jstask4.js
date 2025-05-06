
let days=8;
switch(days){
    case 1:
         console.log("monday");
         break;
    case 2:
         console.log("tuesday");
         break;
    case 3:
         console.log("wednesday");
         break;
    case 4:
         console.log("thursday");
         break;
    case 5:
         console.log("friday");
         break;
    case 6:
         console.log("saturday");
         break;
    case 7:
         console.log("sunday");
         break;
         default:
        console.log("invalid day name");
}
let weekdays= 3;
switch(weekdays){
    case 1:
         console.log("monday");
         break;
    case 2:
         console.log("tuesday");
         break;
    case 3:
         console.log("wednesday");
         break;
    case 4:
         console.log("thursday");
         break;
    case 5:
         console.log("friday");
         break;
    case 6:
         console.log("saturday");
         break;
    case 7:
         console.log("sunday");
         break;
         default:
        console.log("invalid day name");
}
let i =1
let number=" "
while (i<=10) {
     number+=i
     if(i<=9){
      number+=", "
     }
     i++;    
}
console.log("numbers from 1 to 10 using a while loop" + number)
let k =10;
let numbers=" ";
do {
    numbers+= k;
    if(k>=2){
     numbers+=",";
    }
     k--;
} while(k>=1);
console.log("reverse numbers from 10 to 1using a while loop" + numbers)
   