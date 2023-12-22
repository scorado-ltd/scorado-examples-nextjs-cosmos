function generateMedialUrl(filename: string): string {
    return `${process.env.NEXT_PUBLIC_MEDIA_HOST}/${filename}`;
}

export function generateProfileImageUrl(imageId: string): string {
    return generateMedialUrl(`profile-${imageId}.jpg`);
}

export function generateBannerImageUrl(imageId: string): string {
    return generateMedialUrl(`banner-${imageId}.jpg`);
}