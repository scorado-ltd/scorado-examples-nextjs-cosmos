'use client'

import { useSelect, useValue } from "react-cosmos/client";
import Button, { ButtonType } from "~webapp/components/button";
import { enumToArray, stringToEnum } from "~webapp/lib/enums/conversion";

const buttonTypeOptions = enumToArray(ButtonType);

const ButtonFixture = () => {
    const [text] = useValue("Label", { defaultValue: "Button" })
    const [buttonTypeId] = useSelect("Button Type", {
        options: buttonTypeOptions.map(option => option.name),
        defaultValue: ButtonType[buttonTypeOptions[0].id]
    })

    return <Button text={text} type={stringToEnum(ButtonType, buttonTypeId) || ButtonType.Primary} onClick={() => { }} />
}

export default ButtonFixture;