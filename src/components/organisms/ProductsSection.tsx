import { ProductsList, ProductsListProps } from './ProductsList';

export interface ProductsSectionProps {
  title: string;
  productsList: ProductsListProps;
}

export function ProductsSection({ title, productsList }: ProductsSectionProps) {
  return (
    <div>
      <div
        className='w-full px-20'
      >
        <h3 className='text-xl'>{title}</h3>
      </div>
      <ProductsList
        {...productsList}
      />
    </div>
  )
}