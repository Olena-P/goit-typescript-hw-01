interface Address {
  city: string;
  country: string;
}

export interface User {
  name: string;
  age: number;
  email: string;
  address?: Address;
}

export const mango = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

export const poly = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};
