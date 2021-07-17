const b=document.getElementById("s1");
const r=document.getElementById("s2");
const g=document.getElementById("s3");
b.addEventListener("mouseenter",blue);
function blue(){
    console.log("You entered blue region");
}
r.addEventListener("mouseenter",red);
function red(){
    console.log("You entered red region");
}

g.addEventListener("mouseenter",green);
function green(){
    console.log("You entered green region");
}