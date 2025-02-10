export interface Product {
  code: string;
  name: string;
  price: number | null;
}

// 必要に応じて購入アイテム用の型も定義
export interface PurchaseItem {
  code: string;
  name: string;
  price: number | null;
} 