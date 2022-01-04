import {Profile} from "./profile";

export class Cart {
  id: number;
  profile: Profile;
  cartItemId: number;
  cartId: number;

  constructor(id: number, profile: Profile, cartItemId: number, cartId: number) {
    this.id = id;
    this.profile = profile;
    this.cartItemId = cartItemId;
    this.cartId = cartId;
  }
}
