import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/Card/Card'
import StaryURL from '../components/StaryURL/StaryURL'
import { groups } from '../utils/config'
import Logos from '../components/Logos/Logos';

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
          <img src="/images/logo.png" alt="" className="mx-auto mb-12" />
          <p>
            We are a coalition of technology groups and industry leaders dedicated to fostering innovation, promoting
            technology education, and driving technological growth in the Southwest Florida region.
          </p>
          <br></br>
          <p className="mb-4">
            We are a non-profit, non-partisan organization.
          </p>
          <p>Our alliance includes the following groups:</p>
          <Logos />
          <p className="mb-4">
            <b style={{ color: '#358aca' }}>
              <StaryURL title="SWFL Sec" link="https://www.meetup.com/SWFLSec-Southwest-Florida-Infosec-Meetup/" />
              <StaryURL title="Music Makers of SWFL" link="https://www.meetup.com/music-makers-of-southwest-florida/" />
              <StaryURL title="VR & AR of Southwest Florida" link="https://www.meetup.com/vrarswfl/" />
              <StaryURL title="SWFL Coders" link="https://www.meetup.com/swfl-coders/" />
              <StaryURL title="Python SWFL" link="https://www.meetup.com/pythonswfl/" />
              <StaryURL title="SWFL Hackerspace" link="https://www.meetup.com/swfl-hackerspace/" />
            </b>
          </p>
          <p className="mb-4">
            We host community events that are free and open to everyone. These events are held at the Collaboratory in Downtown Fort Myers, offering a welcoming space for individuals and organizations to connect and share our passion for technology.
          </p>
          <div className="flex justify-center">
            <a target="_blank" href="https://www.meetup.com/TechAllianceSWFL/" rel="noopener noreferrer">
              <p className="mb-4">
                Become a part of our community!
              </p>
              <Image className="inline" src="/meetup.svg" alt="Meetup logo" width={40} height={40} />
            </a>
          </div>
        </div>
        <div className="grid gap-4 grid-cols-1 items-start justify-center lg:grid-cols-2 grid-rows-[auto_1fr_auto_auto_auto]">
          {groups.map(group => (
            <Card key={group.id} {...group} />
          ))}
        </div>
      </main>
    </div>
  )
}
