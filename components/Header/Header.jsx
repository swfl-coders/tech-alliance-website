import React from 'react'
import Image from 'next/image'
import logoImage from '../../public/images/logo.png'
import logoPics from '../../public/images/tech-alliance-logos.png'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Image src={logoImage} alt="" placeholder="blur" priority />
    </header>
  )
}

export default Header
