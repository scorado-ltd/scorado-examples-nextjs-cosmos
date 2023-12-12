import { ButtonShape, ButtonSizes, PrimaryButton, SecondaryButton, TertiaryButton, ThemedButton } from '~f/framework/button';
import { ButtonsContainer, ButtonsLeftContainer, ButtonsRightContainer } from '~f/framework/buttonsContainer';
import { Heading1, Heading2 } from '~f/framework/heading';
import { ComponentThemes } from '~f/framework/theme';
import Info from '~f/test/info';
import styles from './page.module.css';

export default function Page() {
  return (
    <main className={styles.main}>
      <Heading1 isThemed>React Cosmos with Next.js 14</Heading1>
      <Heading2>An example project</Heading2>
      <Info text='Run react-cosmos in a sub folder as a separate app. Only build the required fixtures for cosmos while keeping the same codebase.' />
      <br />
      <ButtonsRightContainer>
        <PrimaryButton>Primary Button</PrimaryButton>
        <SecondaryButton>Secondary Button</SecondaryButton>
        <TertiaryButton>Tertiary Button</TertiaryButton>
        <ThemedButton componentTheme={ComponentThemes.Support1}>Themed Button</ThemedButton>
        <ThemedButton componentTheme={ComponentThemes.Support2}>Themed Button</ThemedButton>
        <ThemedButton componentTheme={ComponentThemes.Support3}>Themed Button</ThemedButton>
        <ThemedButton componentTheme={ComponentThemes.Danger}>Themed Button</ThemedButton>
      </ButtonsRightContainer>
      <ButtonsLeftContainer>
        <PrimaryButton size={ButtonSizes.Small}>Primary Button</PrimaryButton>
        <SecondaryButton size={ButtonSizes.Small}>Secondary Button</SecondaryButton>
        <TertiaryButton size={ButtonSizes.Small}>Tertiary Button</TertiaryButton>
        <ThemedButton size={ButtonSizes.Small} componentTheme={ComponentThemes.Support1}>Themed Button</ThemedButton>
        <ThemedButton size={ButtonSizes.Small} componentTheme={ComponentThemes.Support2}>Themed Button</ThemedButton>
        <ThemedButton size={ButtonSizes.Small} componentTheme={ComponentThemes.Support3}>Themed Button</ThemedButton>
        <ThemedButton size={ButtonSizes.Small} componentTheme={ComponentThemes.Danger}>Themed Button</ThemedButton>
      </ButtonsLeftContainer>
      <ButtonsContainer>
        <PrimaryButton shape={ButtonShape.Circle}>PB</PrimaryButton>
        <SecondaryButton shape={ButtonShape.Circle}>SB</SecondaryButton>
        <TertiaryButton shape={ButtonShape.Circle}>TB</TertiaryButton>
        <ThemedButton shape={ButtonShape.Circle} componentTheme={ComponentThemes.Support1}>ThB</ThemedButton>
        <ThemedButton shape={ButtonShape.Circle} componentTheme={ComponentThemes.Support2}>ThB</ThemedButton>
        <ThemedButton shape={ButtonShape.Circle} componentTheme={ComponentThemes.Support3}>ThB</ThemedButton>
        <ThemedButton shape={ButtonShape.Circle} componentTheme={ComponentThemes.Danger}>ThB</ThemedButton>
      </ButtonsContainer>
    </main>
  )
}
