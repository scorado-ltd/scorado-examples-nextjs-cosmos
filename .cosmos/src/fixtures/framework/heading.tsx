'use client'

import { useValue } from "react-cosmos/client";
import { Heading1, Heading2 } from '~webapp/feature/framework/heading';

export function Heading1Fixture() {
    const [text] = useValue("Text", { defaultValue: "Heading 1" })
    const [isThemed] = useValue("Themed", { defaultValue: false });

    return <Heading1 isThemed={isThemed}>{text}</Heading1>
}

export function Heading2Fixture() {
    const [text] = useValue("Text", { defaultValue: "Heading 2" })

    return <Heading2>{text}</Heading2>
}