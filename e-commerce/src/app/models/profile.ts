export class Profile {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  age: string;
  country: string;
  city: string;
  address: string;
  cartId: number;
  image: string;
  phone: string;

  constructor(id: number, firstname: string, lastname: string,
              email: string, gender: string, age: string,
              country: string, city: string, address: string,
              cartId: number, image: string, phone: string) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.gender = gender;
    this.age = age;
    this.country = country;
    this.city = city;
    this.address = address;
    this.cartId = cartId;
    this.image = image;
    this.phone = phone;
  }
}
