export interface ProductItemSkeletonProps {
  children?: any
}

export function ProductItemSkeleton({ children }: ProductItemSkeletonProps) {
  return (
    <div
      className='w-56 h-64 shadow-inner hover:shadow-sm bg-white px-3 py-2 flex flex-col items-center rounded-md'
    >
      {children}
    </div>
  )
}