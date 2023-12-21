import Link from "next/link";
import { Suspense } from "react";
import { getBlogFavorites, getBlogSummaries } from "./blogApi";

export function FavoritesListLoading() {
    return (
        <>
            <div>Loading...</div>
        </>
    )
}

async function FavoritesList() {
    const blogSummaries = await getBlogSummaries();
    const blogFavorites = await getBlogFavorites();
    const favoriteBlogIds = blogFavorites.data?.blogIds ?? [];

    const favorites = favoriteBlogIds.flatMap(blogId => {
        const blog = blogSummaries.data?.blogSummaries.filter(blog => blog.id === blogId);
        if (blog) {
            return blog;
        }

        return [];
    });

    return (
        <>
            {favorites.length > 0 ? favorites.map(blog => (
                <div key={blog.id}>
                    <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                </div>
            )) : (
                <div>No favorites found</div>
            )}
        </>
    )
}

export default async function BlogFavorites() {
    const blogSummaries = await getBlogSummaries();
    const blogFavorites = await getBlogFavorites();
    const favoriteBlogIds = blogFavorites.data?.blogIds ?? [];

    const favorites = favoriteBlogIds.slice(-3).flatMap(blogId => {
        const blog = blogSummaries.data?.blogSummaries.filter(blog => blog.id === blogId);
        if (blog) {
            return blog;
        }

        return [];
    });

    return (
        <div>
            <div>
                <Suspense fallback={<FavoritesListLoading />}>
                    <FavoritesList />
                </Suspense>
            </div>
        </div>
    )
}