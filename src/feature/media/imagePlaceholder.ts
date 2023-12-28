'use server'

import { getPlaiceholder } from "plaiceholder";
import { generateMedialUrl } from "./image";

export async function getImagePlaceholder(path: string) {
    const src = generateMedialUrl(path, { width: 10 });

    const response = await fetch(src);

    if (!response.ok) {
        return null;
    }

    const buffer = Buffer.from(await response.arrayBuffer())
    const result = await getPlaiceholder(buffer);

    return result;
}