import Image from 'next/image';
import { memo } from 'react';

import shopIcon from '../../../public/icon/shop.svg';

import { useInnerSize } from '@/hooks/useInnerSize';

function _HeaderShopIcon() {

    const { innerHeight } = useInnerSize();

    return (
        <>
            {innerHeight && <Image
                src={shopIcon}
                alt="Shop icon"
                height={innerHeight * .1 * .4}
            />}
        </>
    )
}

export const HeaderShopIcon = memo(_HeaderShopIcon);