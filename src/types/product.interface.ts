export interface IProductResponse {
  data: IProduct[];
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  availability: boolean;
  createdAt: Date;
  updatedAt: Date;
}
