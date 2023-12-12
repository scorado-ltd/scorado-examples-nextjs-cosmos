import React from 'react';
import { constructClasses } from '~f/web/css';
import styles from './button.module.scss';
import { ComponentThemes } from './theme';

export enum ButtonSizes {
    Normal,
    Small
}
export enum ButtonStyles {
    Primary,
    Secondary,
    Tertiary
}

export enum ButtonShape {
    Circle,
    Square
}

function getButtonShapeClass(shape: ButtonShape): string {
    switch(shape) {
        case ButtonShape.Circle:
            return styles.Button___circle;
        case ButtonShape.Square:
        default:
            return styles.Button___rectangle;
    }
}
function getButtonStyleClass(buttonStyle: ButtonStyles): string {
    switch (buttonStyle) {
        case ButtonStyles.Secondary:
            return styles.Button___secondary;
        case ButtonStyles.Tertiary:
            return styles.Button___tertiary;
        case ButtonStyles.Primary:
        default:
            return styles.Button___primary;
    }
}
function getButtonSizeClass(buttonSize: ButtonSizes): string | null {
    switch (buttonSize) {
        case ButtonSizes.Small:
            return styles.Button___small;
        default:
            return null;
    }
}
function getButtonThemeClass(buttonTheme: ComponentThemes): string | null {
    switch (buttonTheme) {
        case ComponentThemes.Support1:
            return styles.Button___support1;
        case ComponentThemes.Support2:
            return styles.Button___support2;
        case ComponentThemes.Support3:
            return styles.Button___support3;
        case ComponentThemes.Danger:
            return styles.Button___danger;
        default:
            return null;
    }
}
function buildButtonClasses(themedButton: ThemedButtonProps): string {
    let classes = [styles.Button];

    const buttonShape = themedButton.shape === undefined ? ButtonShape.Square : themedButton.shape;
    const buttonShapeClass = getButtonShapeClass(buttonShape);
    classes.push(buttonShapeClass);

    const buttonStyleClass = getButtonStyleClass(themedButton.buttonStyle);
    classes.push(buttonStyleClass);

    const buttonSizeClass = getButtonSizeClass(themedButton.size || ButtonSizes.Normal);
    if (buttonSizeClass) classes.push(buttonSizeClass);

    if (themedButton.componentTheme !== undefined) {
        const buttonThemeClass = getButtonThemeClass(themedButton.componentTheme);
        if (buttonThemeClass) classes.push(buttonThemeClass);
    }

    if (themedButton.fullWidth) classes.push(styles.Button___fullWidth);

    return constructClasses(classes);
}

interface BaseButtonProps {
    fullWidth?: boolean,
    size?: ButtonSizes,
    shape?: ButtonShape,
    icon?: JSX.Element
}
interface ThemedButtonProps extends BaseButtonProps {
    buttonStyle: ButtonStyles
    componentTheme?: ComponentThemes
}
export interface ButtonElementProps extends BaseButtonProps, React.ButtonHTMLAttributes<HTMLButtonElement> {

}
interface ButtonProps extends ThemedButtonProps, ButtonElementProps {

}
export function Button({ buttonStyle, componentTheme, size, shape, fullWidth, icon, children, ...props }: ButtonProps) {
    let classes = buildButtonClasses({ buttonStyle: buttonStyle, componentTheme: componentTheme, size: size, fullWidth: fullWidth, shape: shape });
    if (props.className) classes += ' ' + props.className;

    return (
        <button {...props} className={classes}>
            {children}
            {icon ? 
                <div className={styles.Button___icon}>{icon}</div>
                :
                null
            }
        </button>
    )
}


export function PrimaryButton(button: ButtonElementProps) {
    return <Button buttonStyle={ButtonStyles.Primary} {...button}>{button.children}</Button>
}
export function SecondaryButton(button: ButtonElementProps) {
    return <Button buttonStyle={ButtonStyles.Secondary} {...button}>{button.children}</Button>
}
export function TertiaryButton(button: ButtonElementProps) {
    return <Button buttonStyle={ButtonStyles.Tertiary} {...button}>{button.children}</Button>
}
interface ThemedButtonsProps extends ButtonElementProps {
    componentTheme?: ComponentThemes
}
export function ThemedButton(button: ThemedButtonsProps) {
    return <Button buttonStyle={ButtonStyles.Primary} {...button}>{button.children}</Button>
}

interface LinkButtonElementProps extends BaseButtonProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {

}
interface LinkButtonProps extends ThemedButtonProps, LinkButtonElementProps {

}
const LinkButton: React.FC<LinkButtonProps> = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(({ buttonStyle, componentTheme, shape, size, fullWidth, children, ...props }, ref) => {
    let classes = buildButtonClasses({ buttonStyle: buttonStyle, componentTheme: componentTheme, size: size, shape: shape, fullWidth: fullWidth });
    if (props.className) classes += ' ' + props.className;

    return (
        <a {...props} className={classes} ref={ref}>{children}</a>
    )
})
LinkButton.displayName = 'LinkButton';

export const PrimaryLinkButton: React.FC<LinkButtonElementProps> = React.forwardRef<HTMLAnchorElement, LinkButtonElementProps>((button, ref) => {
    return <LinkButton buttonStyle={ButtonStyles.Primary} {...button}>{button.children}</LinkButton>
})
PrimaryLinkButton.displayName = 'PrimaryLinkButton';
export const SecondaryLinkButton: React.FC<LinkButtonElementProps> = React.forwardRef<HTMLAnchorElement, LinkButtonElementProps>((button, ref) => {
    return <LinkButton buttonStyle={ButtonStyles.Secondary} {...button}>{button.children}</LinkButton>
})
SecondaryLinkButton.displayName = 'SecondaryLinkButton';
export const TertiaryLinkButton: React.FC<LinkButtonElementProps> = React.forwardRef<HTMLAnchorElement, LinkButtonElementProps>((button, ref) => {
    return <LinkButton buttonStyle={ButtonStyles.Tertiary} {...button}>{button.children}</LinkButton>
})
TertiaryLinkButton.displayName = 'TertiaryLinkButton';
interface ThemedLinkButtonProps extends LinkButtonElementProps {
    componentTheme?: ComponentThemes
}
export const ThemedLinkButton: React.FC<ThemedLinkButtonProps> = React.forwardRef<HTMLAnchorElement, ThemedLinkButtonProps>((button, ref) => {
    return <LinkButton buttonStyle={ButtonStyles.Primary} {...button}>{button.children}</LinkButton>
})
ThemedLinkButton.displayName = 'ThemedLinkButton';