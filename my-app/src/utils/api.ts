// 環境変数からAPIのベースURLを取得
const baseURL = process.env.NEXT_PUBLIC_API_URL;

export interface APIError {
  error: string;
  message: string;
  status: number;
}

// 商品コードのバリデーション
export const validateProductCode = (code: string): boolean => {
  return /^\d{13}$/.test(code);
};

export interface Product {
  code: string;
  name: string;
  price: number;
}

export interface TransactionItem {
  code: string;
  name: string;
  price: number;
}

export interface TransactionRequest {
  items: TransactionItem[];
}

// 商品マスタ検索API
export const searchProduct = async (code: string): Promise<Product> => {
  try {
    const response = await fetch(`${baseURL}/products?code=${code}`);
    if (!response.ok) {
      throw new Error('商品検索に失敗しました');
    }
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

interface PurchaseItem {
  code: string;
  name: string;
  price: number;
}

// 購入処理API
export const handlePurchase = async (items: PurchaseItem[]): Promise<any> => {
  try {
    console.log('Sending request with items:', items); // デバッグ用

    const requestBody = {
      items: items.map(item => ({
        code: item.code,
        name: item.name,
        price: item.price
      }))
    };

    console.log('Request body:', JSON.stringify(requestBody)); // デバッグ用

    const response = await fetch(`${baseURL}/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('API Error response:', errorData); // デバッグ用
      throw new Error(errorData.detail || '購入処理に失敗しました');
    }

    return await response.json();
  } catch (error) {
    console.error('Purchase Error:', error);
    throw error;
  }
};

export const createTransaction = async (items: TransactionItem[]): Promise<void> => {
  const response = await fetch(`${baseURL}/api/transactions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ items }),
  });

  if (!response.ok) {
    throw new Error('取引の作成に失敗しました');
  }
};

export const purchaseProducts = async (items: PurchaseItem[]) => {
  // ... existing code ...
}; 