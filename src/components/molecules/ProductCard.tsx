interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  link: string;
  price?: number;
}

/**
 * Displays a single product card with image, name, price and link.
 */
export default function ProductCard({ name, image, link, price }: ProductCardProps) {
  return (
    <div className="min-w-[360px] flex items-center gap-4 bg-white border border-gray-200 rounded-xl shadow-sm p-4">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 object-contain rounded"
      />
      <div className="flex flex-col">
        <span className="text-sm text-gray-800 font-medium">{name}</span>
        {price !== undefined && (
          <span className="text-sm font-bold mt-1">${price.toFixed(2)}</span>
        )}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline text-gray-600 mt-1"
        >
          View Page
        </a>
      </div>
    </div>
  );
}
