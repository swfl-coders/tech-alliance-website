import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>
        Copyright © <span>{new Date().getFullYear()}</span> Tech Alliance of SWFL. All rights reserved.
      </div>
      <div className={styles.social}>
        <div className={styles.logos}>
          <a href="https://www.meetup.com/TechAllianceSWFL/" target="_blank" rel="noreferrer">
            <Image
              src="/meetup.svg"
              alt="Meetup logo"
              width={30}
              height={30}
            />
          </a>
        </div>
        <div className={styles.logos}>
          <a href="https://www.facebook.com/groups/techswfl" target="_blank" rel="noreferrer">
            <Image
              src="/facebook.svg"
              alt="Facebook logo"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
