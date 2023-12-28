import { ImageProps } from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import DynamicImageClient from './dynamicImageClient';
import { generateMedialUrl } from './image';

export default async function DynamicImage(imageProps: ImageProps) {
    let blurDataURL = undefined;

    if (imageProps.placeholder === 'blur' && imageProps.blurDataURL === undefined) {
        const src = generateMedialUrl(imageProps.src as string, { width: 10 });

        const buffer = await fetch(src).then(async (res) => {
            return Buffer.from(await res.arrayBuffer());
        })

        const { base64 } = await getPlaiceholder(buffer);

        blurDataURL = base64;
    }

    return (
        <DynamicImageClient
            blurDataURL={blurDataURL}
            {...imageProps}
        />
    )
}