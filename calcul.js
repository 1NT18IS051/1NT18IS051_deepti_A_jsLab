 function dis(val)
         {
             document.getElementById("calcl").value+=val
         }
function solve()
         {
             let x = document.getElementById("calcl").value
             let y = eval(x)
             document.getElementById("calcl").value = y
         }
function clr()
{
   document.getElementById("calcl").value=" "
}