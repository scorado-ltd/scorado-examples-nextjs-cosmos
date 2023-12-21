import { Suspense } from "react";
import BlogFavorites from "~f/blog/blogFavorites";
import BlogFavoritesCount, { BlogFavoritesCountLoading } from "~f/blog/blogFavoritesCount";
import { Heading1 } from "~f/framework/heading";
import FullContainer from "~f/framework/layout/container";

export default async function Page() {
    return (
        <FullContainer>
            <Heading1>
                Favorite Blogs
                &nbsp;(<Suspense fallback={<BlogFavoritesCountLoading />}>
                    <BlogFavoritesCount />
                </Suspense>)
            </Heading1>
            <BlogFavorites />
        </FullContainer>
    )
}