// A tuple is a typed array with a pre-defined length and types for each index.
const user: [string, string, boolean] = ["deepak", "@.com", true];

type myUser = [string, number];

// tuple makes the type in a continuous form
let newUser: myUser = ["deepk panchal", 7297095896];
newUser[1] = 1234;

newUser.push(123); //this is a problem in typescript methods in tuple are not work properly

export {};
