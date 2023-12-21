import Link from "next/link";
import { Suspense } from "react";
import { getBlogFavorites, getBlogSummaries } from "./blogApi";

export function FavoritesListLoading() {
    return (
        <>
            <div>- - - -</div>
            <div>- - - -</div>
            <div>- - - -</div>
        </>
    )
}

async function FavoritesList({ lastCount }: { lastCount: number }) {
    const blogSummaries = await getBlogSummaries();
    const blogFavorites = await getBlogFavorites();
    const favoriteBlogIds = blogFavorites.data?.blogIds ?? [];

    const favorites = favoriteBlogIds.slice(lastCount * -1).flatMap(blogId => {
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

async function FavoritesCount() {
    const blogFavorites = await getBlogFavorites();
    const favoriteBlogIds = blogFavorites.data?.blogIds ?? [];

    return (
        <span>{favoriteBlogIds.length}</span>
    )
}

export default async function BlogFavoritesLatest() {
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
            <div>Total Favorites:&nbsp;
                <Suspense fallback={<span>0</span>}>
                    <FavoritesCount />
                </Suspense>
            </div>
            <div>Last Favorited:</div>
            <br />
            <div>
                <Suspense fallback={<FavoritesListLoading />}>
                    <FavoritesList lastCount={3} />
                </Suspense>
            </div>
            <br />
            <div>
                <Link href={`/blog/favorites`}>My Favorites</Link>
            </div>
        </div>
    )
}