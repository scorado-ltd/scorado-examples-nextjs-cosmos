import { Metadata } from "next"
import { PropsWithChildren } from "react"
import { Heading2 } from "~f/framework/heading"
import { Header } from "~f/framework/layout/header"
import { MainContainer } from "~f/framework/layout/mainContainer"

export const metadata: Metadata = {
    title: 'Child Section',
    description: 'Child section description',
}

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Header>
                <Heading2>Child Section Header</Heading2>
            </Header>
            <MainContainer>
                {children}
            </MainContainer>
        </>
    )
}