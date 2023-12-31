import React from 'react'
import styles from '../styles/Header.module.scss'
import Logos from './Logos'

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <Logos />
    </header>
  )
}

export default Header