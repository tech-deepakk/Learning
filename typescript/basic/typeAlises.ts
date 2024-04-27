// 1.Exp
type User = {
  name: string;
  age: number;
  isYouth: boolean;
};

function playGaming(user: User): User {
  return user;
}
playGaming({ name: "deepak", age: 20, isYouth: true });

// 2.exp
type MyString = string;
const takeName = (name: MyString) => {};
takeName("nancy");


export {};
