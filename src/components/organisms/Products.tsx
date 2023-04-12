import { ProductItem, ProductItemProps } from './ProductItem';

export interface ProductsProps {
  products: Product[];
  onClickProduct?: ProductItemProps['onClick'];
}

export function Products({ products, onClickProduct }: ProductsProps) {
  return (
    <div
      className='w-full p-3 flex flex-row gap-6 justify-center items-center flex-wrap'
    >
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onClick={onClickProduct}
        />
      ))}
    </div>    
  )
}