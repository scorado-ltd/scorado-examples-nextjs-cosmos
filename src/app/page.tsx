'use client';

import Button from '../../components/Button';
import Title from '../../components/Title';
import Info from '../../components/info';
import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <Title size='large' text="React-cosmos with NextJs13" />
      <Title size='medium' text="An example project" />
      <Info text='Run react-cosmos in a sub folder as a separate app. Only build the required fixtures for cosmos while keeping the same codebase.' />
      <br />

    </main>
  )
}
