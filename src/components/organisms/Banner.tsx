import Image from 'next/image';
import { useEffect, useState } from 'react';

export interface BannerProps {
    images: {
        src: any;
        alt: string;
    }[]
}

export function Banner({ images }: BannerProps) {

    const [innerWidth, setInnerWidth] = useState(0);

    useEffect(() => {
        setInnerWidth(window.innerWidth);
    }, [])

    return (
        <div
            className='w-full bg-blue-500 overflow-x-auto flex flex-row items-center'
        >
            {images.map((image, imageIndex) => (
                <Image
                    key={imageIndex}
                    src={image.src}
                    alt={image.alt}
                    width={innerWidth}
                />
            ))}
        </div>
    )
}