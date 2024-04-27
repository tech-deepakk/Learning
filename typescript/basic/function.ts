//1.function arguments takes a type & return a type
function addTwo(num: number): number {
  //   return "hello";
  return num + 2;
}

let myVal = addTwo(7);


//2. multiple argumenent with diff types
function signUp(name: string, email: string, isPaid: boolean) {}

signUp("deep", "deep@d", false);


//3. Arrow function  
let login = (name: string, email: string, isPaid: boolean = false) => {};
login("deep", "mlv@deep");


// problem in func
// function getVal(myVal: number):string {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }


// return void in func
function consoleError(errorMess: string): void {
  console.log(errorMess);
  // return 1
}

//never in function
function handleError(errorMess): never {
  throw new Error(errorMess);
}
export {};
