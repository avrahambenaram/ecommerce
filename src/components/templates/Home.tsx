import Head from 'next/head';

import { Header } from '../organisms/Header';
import { Banner, BannerProps } from '../organisms/Banner';
import { ProductsList, ProductsListProps } from '../organisms/ProductsList';

interface HomeTemplateProps {
    banner: BannerProps;
    productsList: ProductsListProps;
}

export function HomeTemplate({ banner, productsList }: HomeTemplateProps) {
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
                <ProductsList
                    {...productsList}
                />
            </main>
        </>
    )
}