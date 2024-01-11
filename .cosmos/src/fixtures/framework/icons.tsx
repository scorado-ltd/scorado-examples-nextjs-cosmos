import { BellIcon, CogIcon, MinusIcon, PlusIcon, TickIcon } from '~webapp/feature/framework/icons';

export const noneIconOption = {
    name: 'None',
    icon: null
}
export const iconOptions = [
    noneIconOption,
    {
        name: "Plus",
        icon: <PlusIcon />,
    },
    {
        name: "Minus",
        icon: <MinusIcon />,
    },
    {
        name: "Bell",
        icon: <BellIcon />,
    },
    {
        name: "Cog",
        icon: <CogIcon />,
    },
    {
        name: "Tick",
        icon: <TickIcon />,
    },
]

export function getIcon(name: string) {
    const iconOption = iconOptions.find(option => option.name === name);

    return iconOption?.icon || undefined
}