import { Heading1, Heading2 } from '~f/framework/heading';
import Info from '~f/test/info';
import styles from './page.module.css';

export default function Page() {
  return (
    <main className={styles.main}>
      <Heading1 isThemed>React Cosmos with Next.js 14</Heading1>
      <Heading2>An example project</Heading2>
      <Info text='Run react-cosmos in a sub folder as a separate app. Only build the required fixtures for cosmos while keeping the same codebase.' />
      <br />
    </main>
  )
}
