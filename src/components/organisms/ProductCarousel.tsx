import { useEffect, useRef, useState } from "react";
import { Product } from "../../types";
import { fetchProducts } from "../../services/productService";
import ProductCard from "../molecules/ProductCard";

/**
 * Scrollable horizontal carousel of product cards.
 */
export default function ProductCarousel() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null); // 👈 nuevo ref

  useEffect(() => {
    async function loadProducts() {
      const result = await fetchProducts();
      const shuffled = result.sort(() => 0.5 - Math.random());
      setProducts(shuffled.slice(0, 3));
      setLoading(false);
    }

    loadProducts();
  }, []);

  // Scroll al renderizar el carrusel
  useEffect(() => {
    if (!loading) {
      carouselRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="text-sm italic text-gray-400">
        Loading product recommendations...
      </div>
    );
  }

  return (
    <div
      ref={carouselRef}
      className="overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 scroll-smooth"
      style={{ scrollbarGutter: "stable", WebkitOverflowScrolling: "auto" }}
    >
      <div className="flex gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            link={product.link}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
