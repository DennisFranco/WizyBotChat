import { Product } from "../types";

/**
 * Fetches demo product data from the Wizybot API.
 * Maps the response to the internal Product structure.
 */
export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch("https://api.wizybot.com/products/demo-product-list");

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    return data.map((item: any) => ({
      id: item.id,
      name: item.displayTitle,
      image: item.imageUrl,
      link: item.url,
      price: getRandomPrice(), // 👈 precio aleatorio
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

/**
 * Returns a random price between 20 and 100 with 2 decimals.
 */
function getRandomPrice(): number {
  return parseFloat((Math.random() * (100 - 20) + 20).toFixed(2));
}