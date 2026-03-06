
export type Product = {
    name: string;
    price: number;
    image: string;
  };
  
  export const products: Record<string, Product> = {
    sofa: { name: "Sofa", price: 0, image: "/products/test.jpeg" },
    bed: { name: "Bed", price: 0, image: "/products/test.jpeg" },
    table: { name: "Table", price: 0, image: "/products/test.jpeg" },
    chair: { name: "Chair", price: 0, image: "/products/test.jpeg" },
  };