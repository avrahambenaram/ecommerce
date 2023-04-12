import Image from 'next/image';

export interface ProductItemProps {
  product: Product;
  onClick?: (item: Product) => any;
}

export function ProductItem({ product, onClick }: ProductItemProps) {
  return (
    <button className='w-56 h-64' onClick={() => onClick ? onClick(product) : null}>
      <div
        className='w-full h-full shadow-inner hover:shadow-sm bg-white px-3 py-2 flex flex-col items-center'
      >
        <Image
          src={product.image}
          alt={product.name}
          className='w-auto max-w-full h-2/3'
        />
        <div className='w-full flex flex-col justify-start items-start'>
          <h2>{product.name}</h2>
          <p>R$ {product.price.toString().replace('.', ',')}</p>
        </div>
      </div>
    </button>
  )
}