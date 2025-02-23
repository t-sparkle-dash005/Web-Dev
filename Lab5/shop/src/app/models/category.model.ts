import {Product} from './product.model';

export interface Category {
  id: number;
  name: string;
  products: Product[];
}
