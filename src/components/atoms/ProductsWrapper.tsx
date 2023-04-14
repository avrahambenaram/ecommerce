export interface ProductsWrapperProps {
  children?: any;
}

export function ProductsWrapper({ children }: ProductsWrapperProps) {
  return (
    <div
      className='w-full p-3 flex flex-row gap-6 justify-center items-center flex-wrap'
    >
      {children}
    </div>
  )
}