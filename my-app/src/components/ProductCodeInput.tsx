import { useState } from 'react';

interface ProductCodeInputProps {
  onSubmit: (code: string) => void;
}

export const ProductCodeInput: React.FC<ProductCodeInputProps> = ({ onSubmit }) => {
  const [code, setCode] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(code);
  };

  return (
    <div>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full p-2 border border-gray-300 mb-2"
      />
      <button
        onClick={handleSubmit}
        className="w-full p-2 bg-blue-100 border border-blue-500"
        type="button"
      >
        商品コード 読み込み
      </button>
    </div>
  );
};