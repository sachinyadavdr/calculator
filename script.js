let element=document.getElementsById("input");
 function add (value){
    input.value+=value;

 }
 function calculate(value){
    input.value=eval(input.value);
 }
 function clearDisplay(value){
    input.value="";
 }
 function backspace(value){
   input.value=input.value.slice(0, -1);
 } 