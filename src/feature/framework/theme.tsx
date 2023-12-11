export enum ComponentThemes {
    Support1,
    Support2,
    Support3,
    Danger
}
export interface ComponentThemeProps {
    componentTheme?: ComponentThemes
}

export const getThemeColorCss = (theme: ComponentThemes): string | null => {
    switch (theme) {
        case ComponentThemes.Support1:
            return 'var(--theme-supportColour1)';
        case ComponentThemes.Support2:
            return 'var(--theme-supportColour2)';
        case ComponentThemes.Support3:
            return 'var(--theme-supportColour3)';
        case ComponentThemes.Danger:
            return 'var(--theme-danger)';
        default:
            return null;
    }
}