var arr=new Array;
var submit=document.querySelector(".button");
var display=document.querySelector(".arr");
var display1=document.querySelector(".arrst");
var sorted=document.querySelector(".sorted");


submit.addEventListener("click",fun);
function fun(){
    var num=document.getElementById("text").value;
    arr.push(num);
}
function disp(){
   let j;
   let num=Array();
   let str=Array();
  for(j=0;j<arr.length;j++){
   if(!isNaN(arr[j])){
    num.push(arr[j]);
}
  else{
  str.push(arr[j]);
}
}
num=num.sort();
str=str.sort();
display.textContent=num;
display1.textContent=str;
sorted.style.visibility="visible"; 
} 
