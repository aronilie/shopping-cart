export interface ApiProduct {
  readonly id: string;
  readonly image_url: string;
  readonly stock: number;
  readonly productName: string;
  readonly price: number;
  readonly productDescription: string;
  readonly favorite: number;
}

export interface ApiProducts extends Array<ApiProduct> {}

export interface Product {
  readonly id: string;
  thumbnail: string;
  stock: number;
  name: string;
  price: number;
  description: string;
  isFavorite: boolean;
}

export interface Products extends Array<Product> {}
