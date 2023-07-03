import React from 'react'
import styles from './header.module.css'
import logo from '../../images/Icon.png'

export function Header() {
  return (
    <header className={styles.header}>
        <img className={styles.header__logo} src={logo} alt='Логотип' />
        <h1 className={styles.header__title}>Find your GIF</h1>
    </header>
  )
}
