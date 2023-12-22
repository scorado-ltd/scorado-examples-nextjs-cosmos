import { Suspense } from "react";
import { PrimaryButton } from "~f/framework/button";
import { getBlogFavorites } from "./blogApi";
import BlogFavoriteToggleButton from "./blogFavoriteToggleButton";

export async function BlogFavoriteToggle({ blogId }: { blogId: string }) {
    const favorites = await getBlogFavorites();
    const isFavorite = favorites.data?.blogIds.includes(blogId) ?? false;

    return (
        <BlogFavoriteToggleButton blogId={blogId} isFavorite={isFavorite} />
    )
}

export function BlogFavoriteToggleLoading() {
    return (
        <PrimaryButton style={{ minWidth: 50 }}>🖤</PrimaryButton>
    )
}

export default function SuspenseBlogFavoriteToggle({ blogId }: { blogId: string }) {
    return (
        <Suspense fallback={<BlogFavoriteToggleLoading />}>
            <BlogFavoriteToggle blogId={blogId} />
        </Suspense>
    )
}