import type { NextApiRequest, NextApiResponse } from 'next';
import type { Product } from '../../types/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product | { error: string }>
) {
  const { code } = req.query;

  // 実際のアプリケーションではDBから取得
  const product = {
    code: code as string,
    name: 'おーいお茶',
    price: 150
  };

  res.status(200).json(product);
} 