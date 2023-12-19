import { Metadata } from "next"
import { PropsWithChildren } from "react"

export const metadata: Metadata = {
    title: 'Child Section',
    description: 'Child section description',
}

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <>
            {children}
        </>
    )
}