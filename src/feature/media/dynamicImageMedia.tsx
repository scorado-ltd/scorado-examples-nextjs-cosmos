import { ImageProps } from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import { generateMedialUrl } from './image';
import ImageMedia from './imageMedia';

export default async function DynamicImageMedia(imageProps: ImageProps) {
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
        <ImageMedia
            blurDataURL={blurDataURL}
            {...imageProps}
        />
    )
}