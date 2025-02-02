import { PurchaseItem } from '../../types/types';
import PurchaseTotal from './PurchaseTotal';

interface Props {
  items: PurchaseItem[];
  onPurchase: () => void;
  showTotal: boolean;
  onTotalClose: () => void;
}

export default function PurchaseList({ 
  items, 
  onPurchase, 
  showTotal, 
  onTotalClose 
}: Props) {
  const total = items.reduce((sum, item) => sum + item.subtotal, 0);

  return (
    <div className="purchase-list">
      <h2 className="purchase-list-title">購入リスト</h2>
      <div className="purchase-items">
        {items.map((item, index) => (
          <div key={index} className="purchase-item">
            <span>{item.name}</span>
            <span>x{item.quantity}</span>
            <span>{item.price}円</span>
            <span>{item.subtotal}円</span>
          </div>
        ))}
      </div>
      {items.length > 0 && (
        <button onClick={onPurchase} className="purchase-button">
          購入
        </button>
      )}
      {showTotal && (
        <PurchaseTotal total={total} onClose={onTotalClose} />
      )}
    </div>
  );
}
