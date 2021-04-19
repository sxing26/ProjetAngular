import { Product } from './product';
import { Info } from './Info';

export interface ProductList {
  info: Info;
  results: Product[];
}