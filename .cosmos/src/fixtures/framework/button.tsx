'use client'

import { useSelect, useValue } from "react-cosmos/client";
import { enumToArray, stringToEnum } from "~webapp/feature/core/enum/conversion";
import { Button, ButtonShape, ButtonSizes, ButtonStyles } from "~webapp/feature/framework/button";
import { ComponentThemes } from "~webapp/feature/framework/theme";
import { getIcon, iconOptions, noneIconOption } from "./icons";

const buttonSizeOptions = enumToArray(ButtonSizes);
const buttonShapeOptions = enumToArray(ButtonShape);
const buttonStyleOptions = enumToArray(ButtonStyles);
const buttonThemeOptions = enumToArray(ComponentThemes);

function useBaseButtonSetup() {
    const [label] = useValue("Label", {
        defaultValue: "Button"
    })

    const [style] = useSelect("Style", {
        options: buttonStyleOptions.map(option => option.name),
        defaultValue: ButtonStyles[ButtonStyles.Primary]
    });
    const selectedStyle = stringToEnum(ButtonStyles, style) || ButtonStyles.Primary;

    const [size] = useSelect("Size", {
        options: buttonSizeOptions.map(option => option.name),
        defaultValue: ButtonSizes[ButtonSizes.Normal]
    })
    const selectedSize = stringToEnum(ButtonSizes, size);

    const [shape] = useSelect("Shape", {
        options: buttonShapeOptions.map(option => option.name),
        defaultValue: ButtonShape[ButtonShape.Square]
    })
    const selectedShape = stringToEnum(ButtonShape, shape);

    const [icon] = useSelect("Icon", { defaultValue: noneIconOption.name, options: iconOptions.map(i => i.name) })
    const selectedIcon = getIcon(icon);

    return {
        label,
        selectedStyle,
        selectedSize,
        selectedShape,
        selectedIcon
    }
}

export function ButtonFixture() {
    const { label, selectedStyle, selectedSize, selectedShape, selectedIcon } = useBaseButtonSetup();

    return <Button
        buttonStyle={selectedStyle}
        size={selectedSize}
        shape={selectedShape}
        icon={selectedIcon}
    >
        {label}
    </Button>
}

export function ThemedButtonFixture() {
    const { label, selectedStyle, selectedSize, selectedShape, selectedIcon } = useBaseButtonSetup();
    const [theme] = useSelect("Theme", {
        options: buttonThemeOptions.map(option => option.name),
        defaultValue: ComponentThemes[ComponentThemes.Support1]
    })

    return <Button
        componentTheme={stringToEnum(ComponentThemes, theme)}
        buttonStyle={selectedStyle}
        size={selectedSize}
        shape={selectedShape}
        icon={selectedIcon}
    >
        {label}
    </Button>
}