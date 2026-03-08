export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
};

export const categories = {
  Sofas: {
    name: "Sofas",
    image: "/products/test.jpeg",
  },
  Beds: {
    name: "Beds",
    image: "/products/test.jpeg",
  },
  Tables: {
    name: "Tables",
    image: "/products/test.jpeg",
  },
  Chairs: {
    name: "Chairs",
    image: "/products/test.jpeg",
  },
};

export const products: Record<string, Product> = {
  "1": {
    id: "1",
    name: "Modern Sofa",
    category: "Sofas",
    price: 0,
    image: "/products/test.jpeg",
    description: "A comfortable modern sofa."
  },
  "2": {
    id: "2",
    name: "Wooden Bed",
    category: "Beds",
    price: 0,
    image: "/products/test.jpeg",
    description: "A sturdy wooden bed."
  },
  "3": {
    id: "3",
    name: "Dining Table",
    category: "Tables",
    price: 0,
    image: "/products/test.jpeg",
    description: "A sleek dining table."
  },
  "4": {
    id: "4",
    name: "Office Chair",
    category: "Chairs",
    price: 0,
    image: "/products/test.jpeg",
    description: "A comfortable office chair."
  },
  "5": {
    id: "5",
    name: "Dining sets",
    category: "Chairs",
    price: 0,
    image: "/products/test.jpeg",
    description: "A comfortable dinging chairs."
  },
  "6": {
    id: "6",
    name: "Bed",
    category: "Beds",
    price: 0,
    image: "/products/test.jpeg",
    description: "confortable bed ."
  },
  "7": {
    id: "7",
    name: "Sofa",
    category: "Sofas",
    price: 0,
    image: "/products/test.jpeg",
    description: "A comfortable office sofa."
  },
  "8": {
    id: "8",
    name: "Office Table",
    category: "Tables",
    price: 0,
    image: "/products/test.jpeg",
    description: "Table."
  }
};