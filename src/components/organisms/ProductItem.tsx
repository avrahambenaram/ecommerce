import Image from 'next/image';
import Link from 'next/link';

import { ProductItemSkeleton } from '../atoms/ProductItemSkeleton';

export interface ProductItemProps {
  product: Product;
  href: string;
}

export function ProductItem({ product, href }: ProductItemProps) {
  return (
    <Link
      href={href}
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
    </Link>
  )
}