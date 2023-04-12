import Router from 'next/router';

import { HomeTemplate } from '@/components/templates/Home';

import banner01 from '../../public/banner/banner01.webp';
import banner02 from '../../public/banner/banner02.webp';
import banner03 from '../../public/banner/banner03.webp';
import banner04 from '../../public/banner/banner04.webp';
import banner05 from '../../public/banner/banner05.webp';
import banner06 from '../../public/banner/banner06.webp';
import banner07 from '../../public/banner/banner07.webp';
import phone from '../../public/product/phone.webp';

export default function Home() {
  return (
    <HomeTemplate
      banner={{
        images: [{
          src: banner01,
          alt: 'Banner01'
        }, {
          src: banner02,
          alt: 'Banner02'
        }, {
          src: banner03,
          alt: 'Banner03'
        }, {
          src: banner04,
          alt: 'Banner04'
        }, {
          src: banner05,
          alt: 'Banner05'
        }, {
          src: banner06,
          alt: 'Banner06'
        }, {
          src: banner07,
          alt: 'Banner07'
        }]
      }}
      products={{
        products: Array.from(new Array(10)).map((_, index) => ({
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
        })),
        onClickProduct(item) {
          Router.push({
            pathname: `product/${item.id}`
          })
        },
      }}
    />
  )
}
