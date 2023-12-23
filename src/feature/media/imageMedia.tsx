'use client'

import Image, { ImageLoaderProps, ImageProps } from 'next/image';
import { generateMedialUrl } from './image';

function imageMediaLoader({ src, width, quality }: ImageLoaderProps) {
    return generateMedialUrl(src, { width, quality });
}

export default function ImageMedia(imageProps: ImageProps) {
    return (
        <Image
            loader={imageMediaLoader}
            {...imageProps}
        />
    )
}