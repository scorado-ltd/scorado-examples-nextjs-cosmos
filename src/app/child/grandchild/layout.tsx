import Link from "next/link"
import { PropsWithChildren } from "react"
import { Heading1, Heading2 } from "~f/framework/heading"
import FullContainer from "~f/framework/layout/container"

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <>
            <FullContainer>
                <Heading1>Grandchild Page</Heading1>
                <Heading2>An example of nesting layouts</Heading2>
                <br />
                <ul>
                    <li><Link href={'/child/grandchild/1'}>Grandchild 1</Link></li>
                    <li><Link href={'/child/grandchild/2'}>Grandchild 2</Link></li>
                </ul>
                <br />
            </FullContainer>
            {children}
        </>
    )
}