type User = {
  name: string;
  id: string | number;
};

// union makes variable take more than one value type
type MyId = number | string;
function getId(id: MyId) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

getId(45);

//union in  arrays
const data: number[] = [1, 2, 3, 4, 4, 6, 77, 4, 42];
const data2: string[] = ["1", "22", "33"];
const data3: (string | number | boolean)[] = [
  1,
  "2",
  3,
  4,
  4,
  false,
  6,
  "77",
  4,
  42,
  true,
];

let pi: 3.14 = 3.14;
// pi=3.145; its not allow in ts because pi act as a literal

let seatAllotment: "aisle" | "window" | "crew";
seatAllotment = "window";
export {};
