import { notFound } from "next/navigation";
import { getBlog } from "~f/blog/blogApi";
import { Heading1 } from "~f/framework/heading";
import FullContainer from "~f/framework/layout/container";

interface PageProps {
    params: {
        id: string;
    }
}

export default async function Page({ params }: PageProps) {
    const blogResponse = await getBlog(params.id);
    const blog = blogResponse.data;

    if (!blog) notFound();

    return (
        <FullContainer>
            <Heading1>{blog.title}</Heading1>
            <p>Created: {blog.createdAt.toLocaleString()}</p>
            <p>Updated: {blog.createdAt.toLocaleString()}</p>
            <p>{blog.content}</p>
        </FullContainer>
    )
}