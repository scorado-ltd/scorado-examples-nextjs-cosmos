'use client'

import { useSelect, useValue } from "react-cosmos/client";
import Info from "~webapp/components/info";

const InfoFixture = () => {
    const [text] = useValue("text", { defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." })
    const [size] = useSelect("size", {
        options: ["large", "medium", "small"],
        defaultValue: "medium"
    })

    return <Info text={text} size={size} />
}

export default InfoFixture;