/**
 *
 * if the number that is input in size is zero it just display clank and nothing eles
 * thunk is display only if size is 1 wich can only happen if it start off as 1. 
 * when size is greater then 1 facky is times by size and it become the number size is 
 * after this it call clunk and facky is put in as time and it display the word clunk  that amount of times
 * so when it gose back it time facky by itself makeing it exponential and it dose this as many time as size 
 * also when something get display it add 1 to the clunk counter wich is display when size reaches 0 
 *  
 */
function clunk(times) {
    var num = times;
    while (num > 0) {
    display("clunk");
    num = num - 1;
    }
   }
   function thingamajig(size) {
    var facky = 1;
    clunkCounter = 0;
    if (size == 0) {
    display("clank");
    } else if (size == 1) {
    display("thunk");
    } else {
    while (size > 1) {
    facky = facky * size;
    size = size - 1;
    }
    clunk(facky);
    }
   }
   function display(output) {
    console.log(output);
    document.writeln(output+"<br>");
    clunkCounter = clunkCounter + 1;
   }
   var clunkCounter = 0;
var amountThrew = 0 
   for(i = 0; i < 7;i++)
   {
       thingamajig(amountThrew)
       amountThrew ++ 

   }
   
   console.log(clunkCounter);
   document.writeln(clunkCounter);