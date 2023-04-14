import { GetStaticPaths, GetStaticProps } from 'next';
import Router from 'next/router';
import { useEffect, useState } from 'react';

import { ProductTemplate } from '@/components/templates/Product';

import phone from '../../../public/product/phone.webp';

interface ProductProps {
  product: Product;
}

const sectionProducts: Product[] = Array.from(new Array(10)).map((_, index) => ({
  id: index.toString(),
  name: 'Galaxy A03S',
  description: `
  Fotografia profissional no seu bolso
  Descubra infinitas possibilidades para suas fotos com as 3 câmeras principais de sua equipe. Teste sua criatividade e jogue com iluminação, diferentes planos e efeitos para obter ótimos resultados.

  Além disso, o dispositivo possui uma câmera frontal de 5 Mpx para que você possa tirar selfies divertidas ou fazer videochamadas.

  Melhor desempenho
  Sua memória RAM de 4 GB permite que seu smartphone funcione sem problemas e sem demora ao executar várias tarefas, jogar jogos ou navegar.

  Desbloqueio facial e de impressão digital
  Máxima segurança para que apenas você possa acessar o sua equipe. Você pode escolher entre o sensor de impressão digital para ativar seu telefone com um toque, ou o reconhecimento facial que permite desbloquear até 30% mais rápido.

  Vida útil da bateria mais longa
  Desconecte-se! Com a super bateria de 5000 mAh você terá energia por muito mais tempo para jogar, assistir séries ou trabalhar sem recarregar.
  `,
  image: phone,
  price: 798,
}))

export default function Product({ product }: ProductProps) {

  const [productsLoading, setProductsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      await delay(3000);

      setProductsLoading(false);
    }

    load();
  }, [])

  return (
    <ProductTemplate
      product={product}
      sections={[{
        title: 'Itens similares',
        productsList: {
          products: sectionProducts,
          hrefProducts: sectionProducts.map(sectionProduct => `http://localhost:3000/product/${sectionProduct.id}`)
        }
      }]}
      productsState={{
        loading: productsLoading,
        count: 5,
      }}
    />    
  )
}

export const getStaticPaths: GetStaticPaths = context => {
  return {
    paths: [{
      params: {
        id: '1',
      }
    }, {
      params: {
        id: '2',
      }
    }, {
      params: {
        id: '3',
      }
    }, {
      params: {
        id: '4',
      }
    }],
    fallback: 'blocking',
  }
}
export const getStaticProps: GetStaticProps = async context => {

  await delay(5000);

  return {
    props: {
      product: {
        id: context.params?.id,
        name: 'Galaxy A03S',
        description: `
        Fotografia profissional no seu bolso
        Descubra infinitas possibilidades para suas fotos com as 3 câmeras principais de sua equipe. Teste sua criatividade e jogue com iluminação, diferentes planos e efeitos para obter ótimos resultados.

        Além disso, o dispositivo possui uma câmera frontal de 5 Mpx para que você possa tirar selfies divertidas ou fazer videochamadas.

        Melhor desempenho
        Sua memória RAM de 4 GB permite que seu smartphone funcione sem problemas e sem demora ao executar várias tarefas, jogar jogos ou navegar.

        Desbloqueio facial e de impressão digital
        Máxima segurança para que apenas você possa acessar o sua equipe. Você pode escolher entre o sensor de impressão digital para ativar seu telefone com um toque, ou o reconhecimento facial que permite desbloquear até 30% mais rápido.

        Vida útil da bateria mais longa
        Desconecte-se! Com a super bateria de 5000 mAh você terá energia por muito mais tempo para jogar, assistir séries ou trabalhar sem recarregar.
        `,
        image: phone,
        price: 798,
      },
    },
    revalidate: 120,
  }
}

const delay = async (ms: number) => new Promise(resolve => setTimeout(resolve, ms));