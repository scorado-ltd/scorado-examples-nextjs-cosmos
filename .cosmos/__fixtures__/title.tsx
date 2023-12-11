'use client'

import { useSelect, useValue } from "react-cosmos/client";
import Title from "~webapp/feature/test/title";

const TitleFixture = () => {
    const [text] = useValue("text", { defaultValue: "Title" })
    const [size] = useSelect("size", {
        options: ["large", "medium", "small"],
        defaultValue: "medium"
    })

    return <Title text={text} size={size} />
}

export default TitleFixture;