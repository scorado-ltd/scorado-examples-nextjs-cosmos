import { Metadata } from "next"
import { PropsWithChildren } from "react"

export const metadata: Metadata = {
    title: 'Blog Post',
    description: 'Blog post description',
}

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <>
            {children}
        </>
    )
}