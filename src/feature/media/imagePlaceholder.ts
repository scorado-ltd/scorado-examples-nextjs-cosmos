'use server'

import { getPlaiceholder } from "plaiceholder";
import { generateMedialUrl } from "./image";

export async function getImagePlaceholder(path: string) {
    const src = generateMedialUrl(path, { width: 10 });

    const buffer = await fetch(src).then(async (res) => {
        return Buffer.from(await res.arrayBuffer());
    })

    const result = getPlaiceholder(buffer);

    return result;
}