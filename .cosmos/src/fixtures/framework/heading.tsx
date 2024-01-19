'use client'

import { useValue } from "react-cosmos/client";
import { Heading1, Heading2, Heading3, Heading4, HeadingSection } from '~webapp/feature/framework/heading';

export function Heading1Fixture() {
    const [text] = useValue("Text", { defaultValue: "Heading 1" })

    return <Heading1>{text}</Heading1>
}

export function Heading2Fixture() {
    const [text] = useValue("Text", { defaultValue: "Heading 2" })

    return <Heading2>{text}</Heading2>
}

export function Heading3Fixture() {
    const [text] = useValue("Text", { defaultValue: "Heading 3" })

    return <Heading3>{text}</Heading3>
}

export function Heading4Fixture() {
    const [text] = useValue("Text", { defaultValue: "Heading 4" })

    return <Heading4>{text}</Heading4>
}

export function HeadingSectionFixture() {
    const [text] = useValue("Text", { defaultValue: "Heading Section" })

    return <HeadingSection>{text}</HeadingSection>
}