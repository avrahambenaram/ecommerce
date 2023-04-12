import { HeaderEcommerce } from '../molecules/HeaderEcommerce';
import { HeaderOptions } from '../molecules/HeaderOptions';
import { HeaderSearchForm } from '../molecules/HeaderSearchForm';

export function Header() {
    return (
        <header className="w-full h-1/10 bg-sky-600 px-4 flex flex-row items-center justify-between">
            <HeaderEcommerce/>
            <HeaderSearchForm/>
            <HeaderOptions/>
        </header>
    )
}