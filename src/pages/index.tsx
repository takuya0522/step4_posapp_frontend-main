import { useState } from 'react';
import ProductCodeInput from '../components/ProductCodeInput';
import ProductInfo from '../components/ProductInfo';
import PurchaseList from '../components/PurchaseList/PurchaseList';
import type { Product, PurchaseItem } from '../types/types';

export default function Home() {
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [purchaseItems, setPurchaseItems] = useState<PurchaseItem[]>([]);
  const [showTotal, setShowTotal] = useState(false);

  const handleProductLoad = async (code: string) => {
    try {
      const response = await fetch(`/api/products?code=${code}`);
      const product = await response.json();
      setCurrentProduct(product);
    } catch (error) {
      setCurrentProduct(null);
    }
  };

  const handleAddToList = () => {
    if (!currentProduct) return;
    const newItem: PurchaseItem = {
      ...currentProduct,
      quantity: 1,
      subtotal: currentProduct.price
    };
    setPurchaseItems([...purchaseItems, newItem]);
    setCurrentProduct(null);
  };

  const handlePurchase = () => {
    setShowTotal(true);
  };

  const handleTotalClose = () => {
    setShowTotal(false);
    setPurchaseItems([]);
    setCurrentProduct(null);
  };

  return (
    <div className="container">
      <div className="input-section">
        <ProductCodeInput onProductLoad={handleProductLoad} />
        <ProductInfo product={currentProduct} onAdd={handleAddToList} />
      </div>
      <PurchaseList 
        items={purchaseItems}
        onPurchase={handlePurchase}
        showTotal={showTotal}
        onTotalClose={handleTotalClose}
      />
    </div>
  );
} 