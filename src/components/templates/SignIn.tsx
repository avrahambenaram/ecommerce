import Head from 'next/head';

import { Header } from '../organisms/Header';
import { SignInForm, SignInFormProps } from '../organisms/SignInForm';

export interface SignInTemplateProps {
  signInForm: SignInFormProps;
}
export function SignInTemplate({ signInForm }: SignInTemplateProps) {
  return (
    <>
      <Head>
        <title>Entrar</title>
        <meta name="description" content="Ecommerce landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header/>
      <main className='w-full h-9/10 flex justify-center items-center'>
        <SignInForm
          {...signInForm}
        />
      </main>
    </>
  )
}