const User = {
  name: "deepak",
  email: "deep@gamil.dev",
  isActive: true,
};

function createUser({ name: string, isActive: boolean }) {}

let newUser = { name: "deepka", isActive: true, email: "@deep.com" };

createUser(newUser);

function createCource({ name, price }): { name: string; price: number } {
  return { name, price };
}

// 1. we also make type like readonly
type Info = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetail?: number; //? makes for optional
};

let myUser: Info = {
  _id: "1234",
  name: "deepak",
  email: "@deep.com",
  isActive: true,
};

// myUser._id = "12345"; we cant do that because it assign readonly properties

//2.Ad two types in a another one
type cardNumber = {
  cardNumber: number;
};

type cardDate = {
  cardDate: string;
};

type cardDetail = cardNumber &
  cardDate & {
    cvv: number;
  };

export {};
