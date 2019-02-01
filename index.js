var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
let price = Math.floor(Math.random() * 100) + 1;
  var newitem = {itemName: item, itemPrice: price };
  cart.push(newitem);
  return item + " has been added to your cart."
}

function viewCart() {
  if (cart === undefined || cart.length == 0) {
    return "Your shopping cart is empty.";
  } else {
    if (cart.length===1) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    } else {
      var thing = "In your cart, you have ";
    for (var i = 0; i < cart.length -1; i++) {
      thing += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
  }
    thing += `and ${cart[cart.length -1].itemName} at $${cart[cart.length -1].itemPrice}.`
          }
      return thing
    }
}

function total() {
var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice;
}
return sum}

function removeFromCart(item) {
  if (cart.includes(item)) {
      var removed = cart.splice(print(cart.indexOf(item)),1);
  } else {
    return "That item is not in your cart.";
  }

}

function placeOrder(cardNumber) {
  // write your code here
}
