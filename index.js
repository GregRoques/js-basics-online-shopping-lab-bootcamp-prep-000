var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  let itemConstructor = {itemName: item, itemPrice: price
  };
cart.push(itemConstructor);
return(`${item} has been added to your cart.`);
}

function viewCart() {
  if (cart.length===0){
    return('Your shopping cart is empty.');
  }else if(cart.length===1){
  return (`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`)  
  } else if (cart.length===2){
    return( `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`)
  } else{
    return()
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
