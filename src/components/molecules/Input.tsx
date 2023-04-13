import { HTMLAttributes } from 'react';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  value: string;
  onChangeValue: (value: string) => void;
  icon: () => JSX.Element
}

export function Input(props: InputProps) {
  return (
    <label
      className='w-full flex flex-row items-center gap-2 px-2 py-1 rounded border-b-2 border-b-blue-500'
    >
      <props.icon/>
      <input
        className='outline-none bg-transparent'
        {...props}
        value={props.value}
        onChange={e => props.onChangeValue(e.target.value)}
      />
    </label>
  )
}