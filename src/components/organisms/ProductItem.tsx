import Image from 'next/image';

import { ProductItemSkeleton } from '../atoms/ProductItemSkeleton';

export interface ProductItemProps {
  product: Product;
  onClick?: (item: Product) => any;
}

export function ProductItem({ product, onClick }: ProductItemProps) {
  return (
    <button
      onClick={() => onClick ? onClick(product) : null}
    >
      <ProductItemSkeleton>
        <Image
          src={product.image}
          alt={product.name}
          className='w-auto max-w-full h-2/3 scale-75'
        />
        <div className='w-full flex flex-col justify-start items-start'>
          <h2>{product.name}</h2>
          <p>R$ {product.price.toString().replace('.', ',')}</p>
        </div>
      </ProductItemSkeleton>
    </button>
  )
}