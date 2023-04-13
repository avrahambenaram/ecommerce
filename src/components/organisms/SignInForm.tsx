import Link from 'next/link';
import { FiAtSign } from 'react-icons/fi';
import { FormEvent } from 'react';

import { Input } from '../molecules/Input';
import { Button } from '../molecules/Button';

export interface SignInFormProps {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  onSubmit: (evt: FormEvent<HTMLFormElement>) => any;
}

export function SignInForm(props: SignInFormProps) {
  return (
    <form
      className='w-80 h-72 px-4 py-4 rounded-md bg-white shadow-inner flex flex-col justify-between'
      method='POST'
      onSubmit={props.onSubmit}
    >
      <h2 className='text-center font-semibold text-lg'>Entrar</h2>
      <Input
        icon={() => <FiAtSign
          size={18}
          className='stroke-blue-500'
        />}
        value={props.email}
        onChangeValue={props.setEmail}
        placeholder='Email'
        // @ts-ignore
        type='email'
      />
      <Input
        icon={() => <FiAtSign
          size={18}
          className='stroke-blue-500'
        />}
        value={props.password}
        onChangeValue={props.setPassword}
        placeholder='Senha'
        // @ts-ignore
        type='password'
      />
      <Button
        // @ts-ignore
        type='submit'
      >
        <span className='text-white'>Entrar</span>
      </Button>
      <p>
        Ainda não tem uma conta? Clique{' '}
          <Link
            href='/signup'
            className='text-blue-500'
          >
            aqui
          </Link>
        {' '}e se cadastre em nosso site
      </p>
    </form>
  )
}