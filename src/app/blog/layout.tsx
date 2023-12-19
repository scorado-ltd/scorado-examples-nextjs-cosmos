import { Metadata } from "next"
import Link from "next/link"
import { PropsWithChildren } from "react"
import { MainContainer } from "~f/framework/layout/mainContainer"

export const metadata: Metadata = {
    title: 'Child Section',
    description: 'Child section description',
}

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <MainContainer>
            <div>
                <Link href="/blog">Back to Blogs</Link> |
                <Link href="/blog/create">Create Blog</Link>
            </div>
            {children}
        </MainContainer>
    )
}