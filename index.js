var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {
let price = Math.floor(Math.random() * 100) + 1;
  var item = {itemName: name, itemPrice: price };
  cart.push(item);
  return `${item["itemName"]} has been added to your cart.`
}

function viewCart() {
  if (cart === undefined || cart.length == 0) {
    return "Your shopping cart is empty.";
  } else {
    if (cart.length==1) {
      return `In your cart, you have ${item["itemName"]} at $${item["itemPrice"]}.`
    } else {
      for (var i = 0; i < cart.length; i++) {
      return `In your cart, you have, ${item[i].itemName} at $${item[i].itemPrice}, and`;
    }
}
}
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
