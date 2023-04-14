import { ProductItemSkeleton } from '../atoms/ProductItemSkeleton';
import { ProductsWrapper } from '../atoms/ProductsWrapper';

export interface ProductsListSkeletonProps {
  count: number;
}

export function ProductsListSkeleton({ count }: ProductsListSkeletonProps) {
  return (
    <ProductsWrapper>
      {Array.from(new Array(count)).map((_, index) => (
        <ProductItemSkeleton
          key={index.toString()}
        />
      ))}
    </ProductsWrapper>
  )
}