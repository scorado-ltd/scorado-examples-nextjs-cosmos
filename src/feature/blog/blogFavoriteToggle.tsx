import { PrimaryButton } from "~f/framework/button";
import { getBlogFavorites } from "./blogApi";
import BlogFavoriteToggleButton from "./blogFavoriteToggleButton";

export function BlogFavoriteToggleLoading() {
    return (
        <PrimaryButton style={{ minWidth: 50 }}>🖤</PrimaryButton>
    )
}

export default async function BlogFavoriteToggle({ blogId }: { blogId: string }) {
    const favorites = await getBlogFavorites();
    const isFavorite = favorites.data?.blogIds.includes(blogId) ?? false //await isBlogFavorite(blogId);

    return (
        <BlogFavoriteToggleButton blogId={blogId} isFavorite={isFavorite} />
    )
}