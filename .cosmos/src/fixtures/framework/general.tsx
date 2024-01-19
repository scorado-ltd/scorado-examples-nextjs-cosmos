'use client'

import { useValue } from "react-cosmos/client";

export function BodyFixture() {
    const [text] = useValue("Text", { defaultValue: "Body" })

    return <p>{text}</p>
}
