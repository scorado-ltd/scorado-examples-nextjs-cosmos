import { getBlogFavorites } from "./blogApi";

export function BlogFavoritesCountLoading() {
    return (
        <span>0</span>
    )
}

export default async function BlogFavoritesCount() {
    const blogFavorites = await getBlogFavorites();
    const favoriteBlogIds = blogFavorites.data?.blogIds ?? [];

    return (
        <span>{favoriteBlogIds.length}</span>
    )
}