import { format, formatISO } from "date-fns";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlog } from "~f/blog/blogApi";
import EditBlogForm from "~f/blog/editBlog";
import { Heading1, Heading2 } from "~f/framework/heading";
import FullContainer from "~f/framework/layout/container";

interface PageProps {
    params: {
        id: string;
    }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const blogResponse = await getBlog(params.id);

    return {
        title: `Editing: "${blogResponse.data?.title}"`,
        description: 'Editing blog...'
    }
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
            <Heading1>Editing Blog</Heading1>
            <Link href={`/blog/${blog.id}`}>Back to Blog</Link>
            <Heading2>{blog.title}</Heading2>
            <p>Created: <time dateTime={createdAtIso}>{createdAtFormatted}</time></p>
            <p>Updated: <time dateTime={updatedAtIso}>{updatedAtFormatted}</time></p>
            <EditBlogForm blog={blog} />
        </FullContainer>
    )
}