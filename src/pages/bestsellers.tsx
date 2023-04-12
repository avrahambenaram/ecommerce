import Head from 'next/head';

import { Header } from '@/components/organisms/Header';

export default function BestSellers() {
  return (
    <>
      <Head>
        <title>Mais vendidos</title>
        <meta name="description" content="Ecommerce landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header/>
    </>
  )
}
