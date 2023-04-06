/**
 * Create a webpage with three buttons, "red", "green", "blue".

When you press the button
 */

function bakcgroundColorRed(color) {
     if (document.body.style.backgroundColor === color) {

          document.body.style.backgroundColor = "white"
     } else {
          document.body.style.backgroundColor = color

     }
}
function bakcgroundColorGreen(color) {
     if (document.body.style.backgroundColor === color) {

          document.body.style.backgroundColor = "white"
     } else {
          document.body.style.backgroundColor = color

     }

}
function bakcgroundColorBlue(color) {
     if (document.body.style.backgroundColor === color) {

          document.body.style.backgroundColor = "white"
     } else {
          document.body.style.backgroundColor = color

     }

}


//**************************************************************** */

// let priceDiv = document.getElementById("totalPrice");
// // choose from below:
// console.log(priceDiv.textContent)
// // priceDiv.hidden = true;
// // priceDiv.style.backgroundColor = "red";
// priceDiv.remove();

//**************************************************************** */

/**
 * In HTML, create a div element and a button.

When the user clicks the button, set the background color of the div to red.
 */
let myDiv = document.getElementById("myDiv");

function changeColor(color) {
     myDiv.style.backgroundColor = "red"
}

//**************************************************************** */
/**
 * When the user clicks the button, 
 * update the textContent of the div element with the amount of times 
 * the user has clicked the button.
 */


let clikedDiv = document.getElementById("clikedDiv");
let count = 0;

function handleClick() {
     count++;
     clikedDiv.textContent = "you clicked " + count + " times"
}


// ******************************************************************
/**
 * We're creating a web shop selling hummus (or chocolate, or eba and egusi soup)!

Create a number input field in HTML that lets the user choose the amount of hummus:

Choose the amount of hummus servings:
<input type="number" id="amount" min="0" value="0" oninput="amountChanged()">
Use the valueAsNumber property of the number input to get the amount that the user selected in your amountChanged function.
 Output the total price the user has to pay to a div element.
 */

let hummasamount = document.getElementById("hummasamount");
let chocoAmount = document.getElementById("chocoAmount");
let totalPay = document.getElementById("totalPay");
let HummasPrice = 7;
let chocoPrice = 8;



function changeAmout() {

     totalPay.textContent =
          "Total Hummas Payemnt " + hummasamount.valueAsNumber * HummasPrice + "$" + " Total Choco Payement " + chocoAmount.valueAsNumber * chocoPrice + "$"
}
//


// ******************************************************************
/**
 * There's a special sale - if the user buys products for more than 20 EUR, they get 10% discount.
 */



function handleChange() {
     let products = document.getElementById("products");
     let checkout = document.getElementById("checkout");
     let singleItemPrice = 5;
     let totalPayement = (products.valueAsNumber) * singleItemPrice;
     let discount = (totalPay / 100) * 10;
     let payementAfterDiscount = totalPayement - discount

     if (totalPayement > 20) {
          console.log("you will pay after discount  " + payementAfterDiscount)
     } else {
          console.log("no discount you will pay " + totalPayement)
     }

}

