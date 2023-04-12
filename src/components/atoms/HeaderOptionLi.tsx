import Link from 'next/link';

interface HeaderOptionProps {
    children: string;
    href?: string;
}

export function HeaderOptionLi(props: HeaderOptionProps) {
    return (
        <li
            className='text-white cursor-pointer hover:text-zinc-300'
        >
            <Link href={props.href || ''}>{props.children}</Link>
        </li>
    )
}