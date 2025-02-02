import { Product } from '../types/types';

interface Props {
  product: Product | null;
  onAdd: () => void;
}

export default function ProductInfo({ product, onAdd }: Props) {
  if (!product) {
    return (
      <div className="product-info">
        <div className="product-name">商品がマスタ未登録です</div>
        <div className="product-price">-</div>
      </div>
    );
  }

  return (
    <div className="product-info">
      <div className="product-name">{product.name}</div>
      <div className="product-price">{product.price}円</div>
      <button onClick={onAdd} className="add-button">
        追加
      </button>
    </div>
  );
}
