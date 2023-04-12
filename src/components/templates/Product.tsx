import Head from 'next/head';

import { Header } from '../organisms/Header';
import { Product } from '../organisms/Product';

export interface ProductTemplateProps {
  product: Product;
}

export function ProductTemplate({ product }: ProductTemplateProps) {
  return (
    <>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header/>
      <main>
        <Product
          product={product}
        />
      </main>
    </>
  )
}