interface MediaUrlOptions {
    width?: number,
    height?: number,
    quality?: number,
    ratio?: string,
    blur?: number
}

export function generateMedialUrl(path: string, options?: MediaUrlOptions): string {
    let url = `${process.env.NEXT_PUBLIC_MEDIA_HOST}/${path.startsWith('/') ? path.substring(1) : path}`;

    if (options) {
        const { width, height, quality, ratio, blur } = options;
        const params = new URLSearchParams();

        if (width && width > 0) {
            params.append('width', width.toString());
        }
        if (height && height > 0) {
            params.append('height', height.toString());
        }
        if (quality && quality > 0 && quality <= 100) {
            params.append('quality', quality.toString());
        }
        if (ratio) {
            params.append('aspect_ratio', ratio);
        }
        if (blur && blur > 0 && blur <= 100) {
            params.append('blur', blur.toString());
        }

        if (params.size > 0) {
            url += `?${params}`
        }
    }

    return url;
}

export function getProfileImagePath(imageId: string): string {
    return `/profile-${imageId}.jpg`;
}

export function getBannerImagePath(imageId: string): string {
    return `/banner-${imageId}.jpg`;
}