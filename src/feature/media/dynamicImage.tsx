import { ImageProps } from 'next/image';
import DynamicImageClient from './dynamicImageClient';
import { getImagePlaceholder } from './imagePlaceholder';

export default async function DynamicImage(imageProps: ImageProps) {
    let blurDataURL = undefined;

    if (imageProps.placeholder === 'blur' && imageProps.blurDataURL === undefined) {
        const { base64 } = await getImagePlaceholder(imageProps.src as string);
        blurDataURL = base64;
    }

    return (
        <DynamicImageClient
            blurDataURL={blurDataURL}
            {...imageProps}
        />
    )
}