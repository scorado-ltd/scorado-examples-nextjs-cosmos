import { Metadata } from "next";
import CreateBlogForm from "~f/blog/createBlog";
import { Heading1 } from "~f/framework/heading";
import FullContainer from "~f/framework/layout/container";

export const metadata: Metadata = {
    title: 'Create',
    description: 'Create the next best blog post!',
}

export default async function Page() {
    return (
        <FullContainer>
            <Heading1>Create Blog</Heading1>
            <CreateBlogForm />
        </FullContainer>
    )
}