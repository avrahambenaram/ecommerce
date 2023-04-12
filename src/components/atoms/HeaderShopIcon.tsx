import Image from 'next/image';
import { memo, useEffect, useState } from 'react';

import shopIcon from '../../../public/icon/shop.svg';

function _HeaderShopIcon() {

    const [innerHeight, setInnerHeight] = useState(0);

    useEffect(() => {
        setInnerHeight(window.innerHeight);
    }, [])

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