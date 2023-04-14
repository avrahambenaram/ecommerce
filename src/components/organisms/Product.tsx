import Image from 'next/image';
import { FiPlusCircle } from 'react-icons/fi';

export interface ProductProps {
  product: Product;
}

export function Product({ product }: ProductProps) {
  return (
    <div
      className='w-full px-2/10 py-10'
    >
      <div
        className='bg-white rounded-xl px-3 py-4 flex'
      >
        <Image
          src={product.image}
          alt={product.name}
          className='scale-75 w-2/5 object-contain'
        />
        <div
          className='flex flex-col gap-2'
        >
          <h2 className='font-semibold text-lg'>{product.name}</h2>
          <p>{product.description}</p>
          <div
            className='flex gap-3'
          >
            <button
              className='bg-blue-500 rounded-md flex-1 py-2 gap-2 flex justify-center items-center'
            >
              <span className='text-base text-white'>Comprar agora</span>
            </button>
            <button
              className='bg-zinc-200 rounded-md flex-1 py-2 gap-2 flex justify-center items-center'
            >
              <FiPlusCircle
                size={18}
                className='stroke-black'
              />
              <span>Adicionar ao carrinho</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}