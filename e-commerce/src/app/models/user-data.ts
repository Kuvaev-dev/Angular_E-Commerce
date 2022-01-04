import {Profile} from "./profile";
import {Cart} from "./cart";
import {CartItem} from "./cart-item";

export class UserData {
  profile: Profile;
  cart: Cart;
  cartItem: CartItem;

  constructor(profile: Profile, cart: Cart, cartItem: CartItem) {
    this.profile = profile;
    this.cart = cart;
    this.cartItem = cartItem;
  }
}
