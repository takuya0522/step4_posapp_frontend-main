import { useState } from 'react';
import { searchProduct, handlePurchase } from '../utils/api';

interface Product {
  code: string;
  name: string;
  price: number;
}

export default function Home() {
  const [code, setCode] = useState<string>('');
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [purchaseItems, setPurchaseItems] = useState<Product[]>([]);

  // 商品コード読み込みボタンのクリックハンドラ
  const handleSubmit = async () => {
    try {
      console.log('Searching for product:', code); // デバッグログ
      const product = await searchProduct(code);
      console.log('Product found:', product); // デバッグログ
      setCurrentProduct(product);
    } catch (error) {
      console.error('Error fetching product:', error);
      setCurrentProduct({
        code: code,
        name: '商品が見つかりませんでした',
        price: null
      });
    }
  };

  const handleAddToList = (product: Product) => {
    setPurchaseItems([...purchaseItems, product]);
  };

  const handlePurchaseClick = async () => {
    if (!purchaseItems.length) return;

    try {
      console.log('Purchase items:', purchaseItems); // デバッグ用

      // 商品情報を正しい形式に変換
      const items = purchaseItems.map(item => ({
        code: item.code || item.CODE,  // 小文字/大文字の両方に対応
        name: item.name || item.NAME,  // 小文字/大文字の両方に対応
        price: item.price || item.PRICE // 小文字/大文字の両方に対応
      }));

      console.log('Formatted items:', items); // デバッグ用

      const result = await handlePurchase(items);
      
      if (result.success) {
        alert(`合計金額: ${result.total}円\n取引が完了しました`);
        // 購入リストをクリア
        setPurchaseItems([]);
        setCode('');
        setCurrentProduct(null);
      } else {
        throw new Error(result.message || '購入処理に失敗しました');
      }
    } catch (error) {
      console.error('Purchase error:', error);
      alert('購入処理中にエラーが発生しました');
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="grid grid-cols-2 gap-8">
        {/* 左側: 商品コード入力と商品表示 */}
        <div className="space-y-4">
          <div>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full p-2 border border-gray-300 mb-2 text-center text-lg"
              placeholder="商品コードを入力"
            />
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-100 border border-blue-500 p-3 text-lg"
            >
              商品コード 読み込み
            </button>
          </div>
          
          {currentProduct && (
            <div className="space-y-2">
              <div className="border border-gray-300 p-3 text-center text-lg">
                {currentProduct.name}
              </div>
              <div className="border border-gray-300 p-3 text-center text-lg">
                {currentProduct.price !== null ? `${currentProduct.price}円` : ''}
              </div>
              {currentProduct.price !== null && (
                <button
                  onClick={() => handleAddToList(currentProduct)}
                  className="w-full bg-blue-100 border border-blue-500 p-3 text-lg"
                >
                  追加
                </button>
              )}
            </div>
          )}
        </div>

        {/* 右側: 購入リスト */}
        <div>
          <div className="space-y-4">
            <div>
              <h2 className="text-lg mb-2">購入リスト</h2>
              <div className="border border-gray-300 p-4">
                {purchaseItems.map((item, index) => (
                  <div key={index} className="flex justify-between mb-2 text-lg">
                    <span>{item.name}</span>
                    <div className="flex gap-6">
                      <span>x1</span>
                      <span>{item.price}円</span>
                      <span>{item.price}円</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {purchaseItems.length > 0 && (
              <button
                onClick={handlePurchaseClick}
                className="w-full bg-blue-500 text-white p-3 rounded"
                disabled={purchaseItems.length === 0}
              >
                購入
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 