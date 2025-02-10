import React from 'react';

interface Product {
  code: string;
  name: string;
  price: number;
}

interface PurchaseListProps {
  items: Product[];
}

export const PurchaseList: React.FC<PurchaseListProps> = ({ items }) => {
  return (
    <div>
      <h2 className="text-lg mb-2">購入リスト</h2>
      <div className="border border-gray-300 p-4 bg-white">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between mb-1">
            <span>{item.name}</span>
            <div className="flex gap-4">
              <span>x1</span>
              <span>{item.price}円</span>
              <span>{item.price}円</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
