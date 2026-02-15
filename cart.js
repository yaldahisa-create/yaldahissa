const CART_KEY = "yi_cart_v1";

export function getCart(){
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; }
  catch { return {}; }
}
function save(cart){ localStorage.setItem(CART_KEY, JSON.stringify(cart)); }

export function addToCart(id, qty=1){
  const cart = getCart();
  cart[id] = (cart[id] || 0) + qty;
  if(cart[id] <= 0) delete cart[id];
  save(cart);
}

export function setQty(id, delta){
  const cart = getCart();
  cart[id] = (cart[id] || 0) + delta;
  if(cart[id] <= 0) delete cart[id];
  save(cart);
}

export function removeItem(id){
  const cart = getCart();
  delete cart[id];
  save(cart);
}

export function clearCart(){ save({}); }

export function getCartCount(){
  const cart = getCart();
  return Object.values(cart).reduce((a,b)=>a+b,0);
}
