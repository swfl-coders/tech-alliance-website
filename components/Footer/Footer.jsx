import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>
        Copyright © <span>{new Date().getFullYear()}</span> Tech Alliance of SWFL. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer