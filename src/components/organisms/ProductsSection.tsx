import { Products, ProductsProps } from './Products';

export interface ProductsSectionProps {
  title: string;
  products: ProductsProps;
}

export function ProductsSection({ title, products }: ProductsSectionProps) {
  return (
    <div>
      <div
        className='w-full px-20'
      >
        <h3 className='text-xl'>{title}</h3>
      </div>
      <Products
        {...products}
      />
    </div>
  )
}