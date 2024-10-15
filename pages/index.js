import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/Card/Card'
import StaryURL from '../components/StaryURL/StaryURL'
import { groups } from '../utils/config'
import Logos from '../components/Logos/Logos.jsx'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tech Alliance</title>
        <meta name="Tech Alliance" content="Your commuity group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.about}>
          <p>
            We are a collective of technology groups and industry leaders dedicated to fostering innovation, promoting
            technology education, and driving the growth of technology in the Southwest Florida region.
          </p>
          <p>We are non-profit, non-partisan.</p>
          <p>
            Our alliance comprises the following groups:<br></br>
            </p>
            <Logos />
            <b style={{ color: '#358aca' }}>
            <StaryURL title="SWFL Coders" link="https://www.meetup.com/swfl-coders/" />
            <StaryURL title="SWFL Sec" link="https://www.meetup.com/SWFLSec-Southwest-Florida-Infosec-Meetup/" />
            <StaryURL title="Python SWFL" link="https://www.meetup.com/pythonswfl/" />
            <StaryURL title="VR & AR of Southwest Florida" link="https://www.meetup.com/vrarswfl/" />
            <StaryURL title="SWFL Hackerspace" link="https://www.meetup.com/swfl-hackerspace/" />
            <StaryURL title="SWFL Tech Nights" link="https://www.meetup.com/swfltechnights/" />
            <StaryURL title="Music Producers of SWFL" link="https://www.facebook.com/musicproducers.swfl" />
            </b>
          <p>
            Our community events are held quarterly, free of charge, and are open to all. We gather at Collaboratory in
            Downtown Fort Myers, providing a welcoming space for individuals and organizations to come together and
            share in our passion for technology.
          </p>
          <div className={styles.logos}>
            <a target="_blank" href="https://www.meetup.com/TechAllianceSWFL/" rel="noopener noreferrer">
              <p>Join us!</p>
              <Image src="/meetup.svg" alt="Meetup logo" width={40} height={40} />
            </a>
          </div>
        </div>
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
