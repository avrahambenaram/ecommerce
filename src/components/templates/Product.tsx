import Head from 'next/head';

import { Header } from '../organisms/Header';
import { Product } from '../organisms/Product';
import { ProductsSection, ProductsSectionProps } from '../organisms/ProductsSection';
import { ProductsSectionSkeleton } from '../organisms/ProductsSectionSkeleton';

export interface ProductTemplateProps {
  product: Product;
  sections: ProductsSectionProps[];
  productsState: {
    loading: boolean;
    count: number;
  }
}

export function ProductTemplate({ product, sections, productsState }: ProductTemplateProps) {
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
        
        {
          productsState.loading
          ? <ProductsSectionSkeleton count={productsState.count}/>
          : sections.map(section => (
            <ProductsSection
              key={section.title}
              {...section}
            />
          ))
        }
        
      </main>
    </>
  )
}