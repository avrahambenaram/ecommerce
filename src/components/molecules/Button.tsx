import { HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {} 

export function Button(props: ButtonProps) {
  return (
    <button
      className='w-full bg-blue-500 h-8 rounded-md'
    >
      {props.children}
    </button>
  )
}