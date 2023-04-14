import { ProductsSkeleton } from './ProductsSkeleton';

export interface ProductsSectionSkeletonProps {
  count: number;
}

export function ProductsSectionSkeleton({ count }: ProductsSectionSkeletonProps) {
  return (
    <div>
      <div
        className='w-full px-20'
      >
        <div className='w-96 h-6 bg-white'></div>
      </div>
      <ProductsSkeleton
        count={count}
      />
    </div>
  )
}