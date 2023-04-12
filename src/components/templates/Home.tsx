import Head from 'next/head';

import { Header } from '../organisms/Header';
import { Banner, BannerProps } from '../organisms/Banner';
import { Products, ProductsProps } from '../organisms/Products';

interface HomeTemplateProps {
    banner: BannerProps;
    products: ProductsProps;
}

export function HomeTemplate({ banner, products }: HomeTemplateProps) {
    return (
        <>
            <Head>
            <title>Início</title>
            <meta name="description" content="Ecommerce landing page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header/>
            <main>
                <Banner
                    {...banner}
                />
                <Products
                    {...products}
                />
            </main>
        </>
    )
}