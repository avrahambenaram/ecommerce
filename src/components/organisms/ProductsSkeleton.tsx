import { ProductItemSkeleton } from '../atoms/ProductItemSkeleton';
import { ProductsWrapper } from '../atoms/ProductsWrapper';

export interface ProductsSkeletonProps {
  count: number;
}

export function ProductsSkeleton({ count }: ProductsSkeletonProps) {
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