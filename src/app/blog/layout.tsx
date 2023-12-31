import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { MainContainer } from "~f/framework/layout/mainContainer";

export async function generateMetadata(_params: unknown, parent: ResolvingMetadata): Promise<Metadata> {
    const parentMetadata = await parent;

    return {
        title: {
            template: parentMetadata.title?.template?.replace('%s', '%s | Blog') || '%s | Blog',
            default: 'Blog',
        },
    }
}

interface LayoutProps extends PropsWithChildren {
    blogModal: React.ReactNode;
}

export default function RootLayout({ children, blogModal }: LayoutProps) {
    return (
        <>
            <MainContainer>
                <div>
                    <Link href="/blog">Back to Blogs</Link> |
                    <Link href="/blog/create">Create Blog</Link>
                </div>
                {children}
            </MainContainer>
            {blogModal}
        </>
    )
}