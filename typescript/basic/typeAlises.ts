// 1.Make type alise of string 
type MyString = string;
const takeName = (name: MyString) => {};
takeName("Thor");

// 2. making Object type 
type User = {
  name: string;
  age: number;
  isYouth: boolean;
};

function playGaming(user: User): User {
  return user;
}
playGaming({ name: "deepak", age: 20, isYouth: true });

export {};
