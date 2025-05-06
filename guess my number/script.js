let randomnumber=Math.floor(Math.random()*20)+1;
console.log("random number:",randomnumber)

let score=document.getElementsByClassName("score")[0].innerHTML;
console.log("score:",score);

let highscore=document.getElementsByClassName("highscore")[0].innerHTML;
console.log("high score:",highscore);

function checkNumber(){
    let inputnumber=document.getElementsByClassName("guess")[0].value;
    console.log("input number",inputnumber)
    if(!inputnumber){
        console.log("hello");
        document.getElementsByClassName("message")[0].innerHTML="empty field"; 
        return;
    }
if(randomnumber==inputnumber){
    console.log("correct");
    document.getElementsByClassName("message")[0].innerHTML="correct";
    document.body.style.backgroundColor="green";
    document.getElementsByClassName("number")[0].innerHTML=inputnumber;
     
   if(highscore < score){
    highscore=score;
    document.getElementsByClassName("highscore")[0].innerHTML=highscore;
   }
}
else{
    score--
    console.log(score);
    document.getElementsByClassName("score")[0].innerHTML=score;
    const body = document.body;
    // body.classList.remove("blink-red");
    // void body.offsetWidth;
    body.classList.add("blink-red");
  
    setTimeout(() => {
        body.classList.remove("blink-red");
    }, 300);

    if(randomnumber>inputnumber){
        console.log("to low")
        document.getElementsByClassName("message")[0].innerHTML="too low,try again"; 
    }
    else{
    document.getElementsByClassName("message")[0].innerHTML="to high,try again";
    console.log("to high")
}
}
 }
function reset() {
    score=20;
    randomnumber=Math.floor(Math.random()*20)+1;
    console.log("new random number:", randomnumber)
    document.getElementsByClassName("message")[0].innerHTML="Start guessing...";
    document.getElementsByClassName("guess")[0].value=""
    document.getElementsByClassName("number")[0].innerHTML="?"
    document.body.style.backgroundColor="#222";
    document.getElementsByClassName("score")[0].innerHTML=20;
    document.getElementsByClassName("highscore")[0].innerHTML=highscore;
  
}