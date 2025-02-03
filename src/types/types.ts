export interface Product {
    code: string;
    name: string;
    price: number;
  }
  
  export interface PurchaseItem extends Product {
    quantity: number;
    subtotal: number;
  }