import { ProductsWrapper } from '../atoms/ProductsWrapper';
import { ProductItem, ProductItemProps } from './ProductItem';

export interface ProductsProps {
  products: Product[];
  onClickProduct?: ProductItemProps['onClick'];
}

export function Products({ products, onClickProduct }: ProductsProps) {
  return (
    <ProductsWrapper>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onClick={onClickProduct}
        />
      ))}
    </ProductsWrapper>   
  )
}