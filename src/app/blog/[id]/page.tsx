import { format, formatISO, getTime } from "date-fns";
import { notFound } from "next/navigation";
import { getBlog, getBlogSummaries } from "~f/blog/blogApi";
import SuspenseBlogFavoriteToggle from "~f/blog/blogFavoriteToggle";
import { Heading1 } from "~f/framework/heading";
import FullContainer from "~f/framework/layout/container";

interface PageProps {
    params: {
        id: string;
    }
}

export const revalidate = 60; // 1 minute
export async function generateStaticParams() {
    const blogsResponse = await getBlogSummaries();
    const blogs = blogsResponse.data?.blogSummaries ?? [];
    const sortedBlogs = blogs.sort((a, b) => getTime(b.updatedAt) - getTime(a.updatedAt));
    const latestBlogs = sortedBlogs.slice(0, 3);

    return latestBlogs.map<PageProps>(blog => ({
        params: {
            id: blog.id
        }
    }));
}

export default async function Page({ params }: PageProps) {
    const blogResponse = await getBlog(params.id);
    const blog = blogResponse.data;

    if (!blog) notFound();

    const createdAtIso = formatISO(blog.createdAt);
    const createdAtFormatted = format(blog.createdAt, 'do LLL yyyy');
    const updatedAtIso = formatISO(blog.updatedAt);
    const updatedAtFormatted = format(blog.updatedAt, 'do LLL yyyy');

    return (
        <FullContainer>
            <Heading1>{blog.title}</Heading1>
            <SuspenseBlogFavoriteToggle blogId={blog.id} />
            <p>Created: <time dateTime={createdAtIso}>{createdAtFormatted}</time></p>
            <p>Updated: <time dateTime={updatedAtIso}>{updatedAtFormatted}</time></p>
            <p>{blog.content}</p>
        </FullContainer>
    )
}