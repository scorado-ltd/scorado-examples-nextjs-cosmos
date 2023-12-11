import React, { PropsWithChildren } from 'react';
import styles from './button.module.scss';
import { ComponentThemes } from './theme';

const getButtonStyleClass = (buttonStyle: ButtonStyles, shape?: ButtonShape): string => {
    switch (buttonStyle) {
        case ButtonStyles.Primary:
            return shape === ButtonShape.Circle ? styles.Button___circlePrimary : styles.Button___primary;
        case ButtonStyles.Secondary:
            return shape === ButtonShape.Circle ? styles.Button___circleSecondary : styles.Button___secondary;
        case ButtonStyles.Tertiary:
            return shape === ButtonShape.Circle ? styles.Button___circleTertiary : styles.Button___tertiary;
        default:
            return shape === ButtonShape.Circle ? styles.Button___circlePrimary : styles.Button___primary;
    }
}
const getButtonSizeClass = (buttonSize: ButtonSizes | undefined, shape?: ButtonShape): string | null => {
    switch (buttonSize) {
        case ButtonSizes.Small:
            return shape === ButtonShape.Circle ? styles.Button___circleSmall : styles.Button___small;
        default:
            return shape === ButtonShape.Circle ? styles.Button___circleNormal : null;
    }
}
const getButtonThemeClass = (buttonTheme: ComponentThemes | undefined, shape?: ButtonShape): string | null => {
    switch (buttonTheme) {
        case ComponentThemes.Support1:
            return shape === ButtonShape.Circle ? styles.Button___circleSupport1 : styles.Button___support1;
        case ComponentThemes.Support2:
            return shape === ButtonShape.Circle ? styles.Button___circleSupport2 : styles.Button___support2;
        case ComponentThemes.Support3:
            return shape === ButtonShape.Circle ? styles.Button___circleSupport3 : styles.Button___support3;
        case ComponentThemes.Danger:
            return shape === ButtonShape.Circle ? styles.Button___circleDanger : styles.Button___danger;
        default:
            return null;
    }
}
const buildButtonClasses = (themedButton: ThemedButtonProps): string => {

    const buttonStyleClass = getButtonStyleClass(themedButton.buttonStyle, themedButton.shape);
    let classes = buttonStyleClass;

    const buttonSizeClass = getButtonSizeClass(themedButton.size, themedButton.shape);
    if (buttonSizeClass) classes += ' ' + buttonSizeClass;

    const buttonThemeClass = getButtonThemeClass(themedButton.componentTheme, themedButton.shape);
    if (buttonThemeClass) classes += ' ' + buttonThemeClass;


    if (themedButton.fullWidth) classes += ' ' + styles.Button___fullWidth;

    return classes;
}

interface ButtonsContainerProps extends PropsWithChildren {
    className?: string
}
export const ButtonsContainer: React.FC<ButtonsContainerProps> = ({ children, className }) => {
    return (
        <div className={`${styles.ButtonsContainer} ${className}`}>
            {children}
        </div>
    )
}
export function ButtonsLeftContainer({ children } : PropsWithChildren) {
    return (
        <div className={styles.ButtonsLeftContainer}>
            {children}
        </div>
    )
}
export function ButtonsRightContainer({ children } : PropsWithChildren) {
    return (
        <div className={styles.ButtonsRightContainer}>
            {children}
        </div>
    )
}

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
    Circle, Square
}
interface BaseButtonProps {
    fullWidth?: boolean,
    size?: ButtonSizes,
    shape?: ButtonShape,
}
interface ThemedButtonProps extends BaseButtonProps {
    buttonStyle: ButtonStyles
    componentTheme?: ComponentThemes
}
export interface ButtonElementProps extends BaseButtonProps, React.ButtonHTMLAttributes<HTMLButtonElement> {

}
interface ButtonProps extends ThemedButtonProps, ButtonElementProps {

}
const Button: React.FC<ButtonProps> = ({ buttonStyle, componentTheme, size, shape, fullWidth, children, ...props }) => {
    let classes = buildButtonClasses({ buttonStyle: buttonStyle, componentTheme: componentTheme, size: size, fullWidth: fullWidth, shape: shape });
    if (props.className) classes += ' ' + props.className;

    return (
        <button {...props} className={classes}>{children}</button>
    )
}


export const PrimaryButton: React.FC<ButtonElementProps> = (button) => {
    return <Button buttonStyle={ButtonStyles.Primary} {...button}>{button.children}</Button>
}
export const SecondaryButton: React.FC<ButtonElementProps> = (button) => {
    return <Button buttonStyle={ButtonStyles.Secondary} {...button}>{button.children}</Button>
}
export const TertiaryButton: React.FC<ButtonElementProps> = (button) => {
    return <Button buttonStyle={ButtonStyles.Tertiary} {...button}>{button.children}</Button>
}
interface ThemedButtonsProps extends ButtonElementProps {
    componentTheme?: ComponentThemes
}
export const ThemedButton: React.FC<ThemedButtonsProps> = (button) => {
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