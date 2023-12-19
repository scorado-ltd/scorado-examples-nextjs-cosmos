import CreateBlogForm from "~f/blog/createBlog";
import { Heading1 } from "~f/framework/heading";
import FullContainer from "~f/framework/layout/container";

export default async function Page() {
    return (
        <FullContainer>
            <Heading1>Create Blog</Heading1>
            <CreateBlogForm />
        </FullContainer>
    )
}