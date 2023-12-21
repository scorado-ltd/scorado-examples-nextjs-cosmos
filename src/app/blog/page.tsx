import { Suspense } from "react";
import BlogFavoritesLatest from "~f/blog/blogFavoritesLatest";
import { BlogSummaries } from "~f/blog/blogSummaries";
import CreateBlogForm from "~f/blog/createBlog";
import { Heading1, Heading2 } from "~f/framework/heading";
import FullContainer from "~f/framework/layout/container";

export default function Page() {
    return (
        <FullContainer>
            <Heading1>Blog</Heading1>
            <Heading2>Create Blog</Heading2>
            <CreateBlogForm />
            <Heading2>Blogs</Heading2>
            <BlogSummaries />
            <Heading2>Favorite Blogs</Heading2>
            <Suspense fallback={<BlogFavoritesLatest />}>
                <BlogFavoritesLatest />
            </Suspense>
        </FullContainer>
    )
}