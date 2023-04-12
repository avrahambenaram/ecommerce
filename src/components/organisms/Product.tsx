import Image from 'next/image';

export interface ProductProps {
  product: Product;
}

export function Product({ product }: ProductProps) {
  return (
    <div>
      <Image
        src={product.image}
        alt={product.name}
      />
    </div>
  )
}