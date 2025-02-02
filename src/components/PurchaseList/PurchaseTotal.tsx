interface Props {
  total: number;
  onClose: () => void;
}

export default function PurchaseTotal({ total, onClose }: Props) {
  return (
    <div className="total-popup">
      <div className="popup-content">
        <h3>合計金額（税込）</h3>
        <p>{total}円</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}
