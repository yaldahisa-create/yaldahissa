import { getCartCount } from "./cart.js";

export function setYear(){
  const y = document.getElementById("year");
  if(y) y.textContent = String(new Date().getFullYear());
}

export function setCartCount(){
  const el = document.getElementById("cartCount");
  if(el) el.textContent = String(getCartCount());
}

export function money(cents){
  return "$" + (cents/100).toFixed(2);
}

export function qs(key){
  const url = new URL(window.location.href);
  return url.searchParams.get(key);
}
