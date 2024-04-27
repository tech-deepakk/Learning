// 1. assign array type of string
const superHeros: string[] = ["thor", "ironMan", "spiderman"];

// 2. different method to type of array
const heroPower: Array<number> = []; //another type to desc.. array
superHeros.push("Wanda");
superHeros.push("black Widow");

// 3. object in an array
type User = {
  name: string;
  email: string;
  isActive;
};
const allUser: User[] = [];
allUser.push({ name: "deepak", email: "d@.com", isActive: true });

//4. number of array  in an array
const MlModel: number[][] = [
  [255, 255, 255],
  [252, 255, 255],
  [0, 0, 0],
  [155, 255, 255],
  [255, 213, 255],
  [255, 255, 113],
];

// pop data from empty array
const username: string[] = [];
username.pop();

export {};
