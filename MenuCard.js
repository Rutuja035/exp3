const prompt=require("prompt-sync")();

console.log("1.Pizza");
console.log("2.Pasta");
console.log("3.Noodles");
console.log("4.Fries");
console.log("5.Burger");

let order=parseInt(prompt("Whats your order?"));



switch(order)
{
   case 1:console.log("Your pizza is ready");
         break;
   case 2:console.log("Your Pasta is ready");
         break;
   case 3:console.log("Your Noodles is ready");
         break;
   case 4:console.log("Your Fries is ready");
         break;
   case 5:console.log("Your Burger is ready");
         break;

   default:console.log("Your order is not available");     
}

