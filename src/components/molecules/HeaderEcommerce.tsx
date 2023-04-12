import { HeaderShopIcon } from '../atoms/HeaderShopIcon';

export function HeaderEcommerce() {
    return (
        <div className='flex flex-row gap-2 items-center w-1/4'>
            <HeaderShopIcon/>
            <p className='text-base text-white font-semibold'>
                Ecommerce
            </p>
        </div>
    )
}