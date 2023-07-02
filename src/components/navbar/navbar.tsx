import React from 'react'
import styles from './navbar.module.css'

export function Navbar() {
  return (
      <nav className={styles.navbar__container}>
        <ul className={styles.navbar__menu}>
          <li className={styles.navbar__element}>Search</li>
          <li className={styles.navbar__element}>Trends</li>
          <li className={styles.navbar__element}>Random GIF</li>
        </ul>
      </nav>
  )
}
