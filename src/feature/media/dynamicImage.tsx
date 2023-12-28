import { ImageProps } from 'next/image';
import DynamicImageClient from './dynamicImageClient';
import { getImagePlaceholder } from './imagePlaceholder';

export default async function DynamicImage(imageProps: ImageProps) {
    let blurDataURL = imageProps.blurDataURL;
    let placeholder = imageProps.placeholder;

    if (placeholder === 'blur' && blurDataURL === undefined) {
        const result = await getImagePlaceholder(imageProps.src as string);

        if (result) {
            blurDataURL = result.base64;
        }
        else {
            placeholder = 'empty';
        }
    }

    return (
        <DynamicImageClient
            {...imageProps}
            blurDataURL={blurDataURL}
            placeholder={placeholder}
        />
    )
}