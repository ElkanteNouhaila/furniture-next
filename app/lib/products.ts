export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  rating:number,
  
};

export const categories = {
  Sofas: {
    name: "Sofas",
    image: "/products/test.jpeg",
    count: 24,
  },
  Beds: {
    name: "Beds",
    image: "/products/test.jpeg",
    count: 24,
  },
  Tables: {
    name: "Tables",
    image: "/products/test.jpeg",
    count: 24,
  },
  Chairs: {
    name: "Chairs",
    image: "/products/test.jpeg",
    count: 24,
  },
};

export const products: Record<string, Product> = {
  "1": {
    id: "1",
    name: "Modern Sofa",
    category: "Sofas",
    image: "/products/test.jpeg",
    description: "A comfortable modern sofa.",
    rating: 4.5,
  },
  "2": {
    id: "2",
    name: "Wooden Bed",
    category: "Beds",
    image: "/products/test.jpeg",
    description: "A sturdy wooden bed.",
    rating: 4.5,

  },
  "3": {
    id: "3",
    name: "Dining Table",
    category: "Tables",
    image: "/products/test.jpeg",
    description: "A sleek dining table.",
    rating: 4.5,

  },
  "4": {
    id: "4",
    name: "Office Chair",
    category: "Chairs",
    image: "/products/test.jpeg",
    description: "A comfortable office chair.",
    rating: 4.5,

  },
  "5": {
    id: "5",
    name: "Dining sets",
    category: "Chairs",
    image: "/products/test.jpeg",
    description: "A comfortable dinging chairs.",
    rating: 4.5,

  },
  "6": {
    id: "6",
    name: "Bed",
    category: "Beds",
    image: "/products/test.jpeg",
    description: "confortable bed .",
    rating: 4.5,
  },
  "7": {
    id: "7",
    name: "Sofa",
    category: "Sofas",
    image: "/products/test.jpeg",
    description: "A comfortable office sofa.",
    rating: 4.5,
  },
  "8": {
    id: "8",
    name: "Office Table",
    category: "Tables",
    image: "/products/test.jpeg",
    description: "Table.",
    rating: 4.5,

  }
};