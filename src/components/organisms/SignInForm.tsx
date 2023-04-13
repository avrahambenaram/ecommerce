import Image from 'next/image';
import Link from 'next/link';
import { FiAtSign } from 'react-icons/fi';

import { Input } from '../molecules/Input';
import { useSignIn } from '@/hooks/useSignIn';
import { Button } from '../molecules/Button';

export function SignInForm() {

  const { models, operations } = useSignIn();

  return (
    <form
      className='w-80 h-72 px-4 py-4 rounded-md bg-white shadow-inner flex flex-col justify-between'
      method='POST'
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
      <Button>
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