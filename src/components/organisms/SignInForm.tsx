import Link from 'next/link';
import { FiAtSign } from 'react-icons/fi';
import { FormEvent } from 'react';

import { Input } from '../molecules/Input';
import { Button } from '../molecules/Button';
import { useSignIn } from '@/hooks/useSignIn';

export interface SignInFormProps {
  onSend: (props: {
    email: string;
    password: string
  }) => any
}

export function SignInForm(props: SignInFormProps) {

  const { models, operations } = useSignIn();

  function onSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    props.onSend({
      email: models.email,
      password: models.password,
    })
  }

  console.log('Renderizou signInForm')

  return (
    <form
      className='w-80 h-72 px-4 py-4 rounded-md bg-white shadow-inner flex flex-col justify-between'
      method='POST'
      onSubmit={onSubmit}
    >
      <h2 className='text-center font-semibold text-lg'>Entrar</h2>
      <Input
        icon={() => <FiAtSign
          size={18}
          className='stroke-blue-500'
        />}
        value={models.email}
        onChangeValue={operations.setEmail}
        placeholder='Email'
        // @ts-ignore
        type='email'
      />
      <Input
        icon={() => <FiAtSign
          size={18}
          className='stroke-blue-500'
        />}
        value={models.password}
        onChangeValue={operations.setPassword}
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