import { useState } from 'react';

interface Props {
  onProductLoad: (code: string) => void;
}

export default function ProductCodeInput({ onProductLoad }: Props) {
  const [code, setCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onProductLoad(code);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="商品コードを入力"
        className="code-input"
      />
      <button type="submit" className="read-button">
        商品コード 読み込み
      </button>
    </form>
  );
}
