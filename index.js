
function refreshPage(){
    window.location.reload();
} 
var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomdimage1="dice"+randomnumber1+".png";
var randomdimage2="dice"+randomnumber2+".png";
var imagesource1="./images/"+randomdimage1;
var imagesource2="./images/"+randomdimage2;
var image1=document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[1];



image1.setAttribute("src",imagesource1);
image2.setAttribute("src",imagesource2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="🚩 player 1 wins! ";

}else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML=" player 2 wins!  🚩";

}else{
document.querySelector("h1").innerHTML="🚩  Draw!  🚩";
}
