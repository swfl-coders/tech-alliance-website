import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/Card/Card'
import { groups } from '../utils/config'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tech Alliance</title>
        <meta name="Tech Alliance" content="Your commuity group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
        <>
        {groups.map(group => (
          <Card key={group.id} {...group} />
        ))}
        </>
        </div>
      </main>
    </div>
  )
}
