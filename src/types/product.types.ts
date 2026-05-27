interface Product {
  id?: number | string;
  title?: string;
  description?: string;
  category?: string;
  brand?: string;
  model?: string;
  price?: number;
  discount?: number;
  rating?: number;
  tags?: string[];
  images?: string[];
  thumbnail?: string;
  with_gifts?: boolean;
  is_new?: boolean;
}

export type { Product };
