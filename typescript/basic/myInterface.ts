interface user {
  name: string;
  email: string;
  id: number;
  getDetail(): string;
}

// we can reopen and inject  the values in the interface
interface user {
  readonly db: string;
}

// inheritance is also allow in the interface
interface Admin extends user {
  role: string;
}

const myUser: Admin = {
  role: "developer",
  db: "deepak databases",
  name: "deepak panchal",
  email: "@deep.com",
  id: 1234,
  getDetail: () => "harry",
};
