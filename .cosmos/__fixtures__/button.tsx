'use client'

import { useSelect, useValue } from "react-cosmos/client";
import Button from "../../components/button";

const ButtonFixture = () => {
    const [text] = useValue("text", { defaultValue: "Button" })
    const [type] = useSelect("type", {
        options: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "link"],
        defaultValue: "primary"
    })

    return <Button text={text} type={type} onClick={() => { }} />
}

export default ButtonFixture;