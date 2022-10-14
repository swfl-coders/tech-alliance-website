import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>
        Copyright © <span>{new Date().getFullYear()}</span> Tech Alliance of SWFL. All rights reserved.
      </div>

      <div className={styles.social}>
        <div className={styles.logos}>
          <a href="https://www.meetup.com/TechAllianceSWFL/" target="_blank" rel="noreferrer">
            <img
              src="/meetup.svg"
              alt="Meetup logo"
            />
          </a>
        </div>
        <div className={styles.logos}>
          <a href="https://www.facebook.com/groups/techswfl" target="_blank" rel="noreferrer">
            <img
              src="/facebook.svg"
              alt="Facebook logo"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer