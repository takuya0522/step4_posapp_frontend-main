import React from 'react'; 

interface Product {
  code: string;
  name: string;
  price: number;
}

interface ProductDisplayProps {
  product: Product | null;
  onAddToList: (product: Product) => void;
}

export const ProductDisplay: React.FC<ProductDisplayProps> = ({ product, onAddToList }) => {
  if (!product) return null;

  return (
    <div className="space-y-2">
      <div className="border border-gray-300 p-3 text-center bg-white">
        {product.name}
      </div>
      <div className="border border-gray-300 p-3 text-center bg-white">
        {product.price}円
      </div>
      <button
        onClick={() => onAddToList(product)}
        className="w-full p-3 bg-blue-100 border border-blue-500 text-center"
      >
        追加
      </button>
    </div>
  );
};