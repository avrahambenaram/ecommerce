import { HeaderOptionLi } from '../atoms/HeaderOptionLi'

export function HeaderOptions() {
    return (
        <ul
            className='flex flex-row items-center gap-2 w-1/4'
        >
            <HeaderOptionLi href='/bestsellers'>Mais vendido</HeaderOptionLi>
            <HeaderOptionLi href='/about'>Sobre</HeaderOptionLi>
            <HeaderOptionLi href='/whoweare'>Quem somos</HeaderOptionLi>
            <HeaderOptionLi href='/signin'>Entrar</HeaderOptionLi>
        </ul>
    )
}