var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var item = new Object();
  function updateitem (item, itemName, itemPrice){
    return Object.assign({}, item, {[itemName]: Math.floor(Math.random() * 100) + 1});
  }
  cart.push(item);
  return this.itemName + " has been added to your cart.";
}

function viewCart() {
  // write your code here
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
