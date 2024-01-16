import { Metadata, ResolvingMetadata } from "next"
import { PropsWithChildren } from "react"
import { Heading2 } from "~f/framework/heading"
import { MainContainer } from "~f/framework/layout/mainContainer"
import { StickyHeader } from "~f/framework/layout/stickyHeader"

export async function generateMetadata(_params: unknown, parent: ResolvingMetadata): Promise<Metadata> {
    const parentMetadata = await parent;

    return {
        title: {
            template: parentMetadata.title?.template?.replace('%s', '%s | Child Section T') || '%s | Child Section F',
            default: 'Child Section D',
        },
    }
}

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <>
            <StickyHeader>
                <Heading2>Child Section Header</Heading2>
            </StickyHeader>
            <MainContainer>
                {children}
            </MainContainer>
        </>
    )
}