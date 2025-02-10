import React from 'react';

interface PurchaseButtonProps {
  onPurchase: () => void;
  disabled?: boolean;
}

export const PurchaseButton: React.FC<PurchaseButtonProps> = ({ onPurchase, disabled }) => {
  return (
    <button
      onClick={onPurchase}
      disabled={disabled}
      className="w-full p-3 bg-blue-100 border border-blue-500 text-center"
    >
      購入
    </button>
  );
};
