export interface ProductsWrapperProps {
  children?: any;
}

export function ProductsWrapper({ children }: ProductsWrapperProps) {
  return (
    <ul
      className='w-full p-3 list-none flex flex-row gap-6 justify-center items-center flex-wrap'
    >
      {children}
    </ul>
  )
}