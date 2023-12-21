import Link from "next/link";
import { getBlogFavorites, getBlogSummaries } from "./blogApi";

export function BlogFavoritesLatestLoading() {
    return (
        <div>Loading...</div>
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
            <div>Last 3 Favorited:</div>
            <br />
            <div>
                {favorites.length > 0 ? favorites.map(blog => (
                    <div key={blog.id}>
                        <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                    </div>
                )) : (
                    <div>No favorites found</div>
                )}
            </div>
            <br />
            <div>
                <Link href={`/blog/favorites`}>My Favorites</Link>
            </div>
        </div>
    )
}