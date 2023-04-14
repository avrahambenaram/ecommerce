import { ProductsWrapper } from '../atoms/ProductsWrapper';
import { ProductItem, ProductItemProps } from './ProductItem';

export interface ProductsListProps {
  products: Product[];
  hrefProducts: string[];
}

export function ProductsList({ products, hrefProducts }: ProductsListProps) {
  return (
    <ProductsWrapper>
      {products.map((product, index) => (
        <li key={product.id}>
          <ProductItem
            product={product}
            href={hrefProducts[index]}
          />
        </li>
      ))}
    </ProductsWrapper>   
  )
}