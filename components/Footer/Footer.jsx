import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <div className={styles.logos}>
          <a href="https://www.meetup.com/TechAllianceSWFL/" target="_blank" rel="noreferrer">
            <Image src="/images/socials/mu-icon.png" alt="Meetup logo" width={40} height={40} />
          </a>
        </div>
        <div className={styles.logos}>
          <a href="https://www.facebook.com/techallianceswfl" target="_blank" rel="noreferrer">
            <Image src="/images/socials/fb-icon.png" alt="Facebook logo" width={40} height={40} />
          </a>
        </div>
        <div className={styles.logos}>
          <a href="https://twitter.com/tech_swfl" target="_blank" rel="noreferrer">
            <Image src="/images/socials/x-social.png" alt="X/Twitter Logo" width={40} height={40} />
          </a>
        </div>
        <div className={styles.logos}>
          <a href="https://discord.gg/G5UR26qAbT" target="_blank" rel="noreferrer">
            <Image src="/images/socials/dis-icon.png" alt="Discord Logo" width={40} height={40} />
          </a>
        </div>
        <div className={styles.logos}>
          <a>
            <Image src="/images/socials/ig-icon.png" alt="Instagram Logo" width={40} height={40} />
          </a>
        </div>
        <div className={styles.logos}>
          <a href="https://www.youtube.com/@techallianceswfl" target="_blank" rel="noreferrer">
            <Image src="/images/socials/yt-icon.png" alt="Youtube Logo" width={40} height={40} />
          </a>
        </div>
      </div>
      <div className={styles.copy}>
        Copyright © <span>{new Date().getFullYear()}</span> Tech Alliance of SWFL. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer

