'use client'

import Image, { ImageLoaderProps, ImageProps } from 'next/image';
import { generateMedialUrl } from './image';

function loader({ src, width, quality }: ImageLoaderProps) {
    return generateMedialUrl(src, { width, quality });
}

export default function DynamicImageClient(imageProps: ImageProps) {
    return (
        <Image
            loader={loader}
            {...imageProps}
        />
    )
}