import { BlogSummaries } from "~f/blog/blogSummaries";
import { Heading1 } from "~f/framework/heading";
import FullContainer from "~f/framework/layout/container";

export default function Page() {
    return (
        <FullContainer>
            <Heading1>Blog</Heading1>
            <BlogSummaries />
        </FullContainer>
    )
}