import Link from "next/link";
import { getBlogSummaries } from "./blogApi";
import BlogDeleteButton from "./blogDeleteButton";

export async function BlogSummaries() {
    const blogsResponse = await getBlogSummaries();
    const blogs = blogsResponse.data?.blogSummaries;

    return (
        <ul>
            {blogs ? blogs.map(blog => (
                <li key={blog.id}>
                    <Link href={`/blog/${blog.id}`}>{blog.title}</Link> | <BlogDeleteButton blogId={blog.id} />
                </li>
            )) : (
                <li>No blogs found</li>
            )}
        </ul>
    )
}