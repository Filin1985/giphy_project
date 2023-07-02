import React from 'react'
import styles from './navbar.module.css'
import {NavLink} from 'react-router-dom'

export function Navbar() {
  return (
    <nav className={styles.navbar__container}>
      <ul className={styles.navbar__menu}>
        <NavLink to='/' className={styles.navbar__element}>
          Search
        </NavLink>
        <NavLink to='/trends' className={styles.navbar__element}>
          Trends
        </NavLink>
        <NavLink to='/random' className={styles.navbar__element}>
          Random GIF
        </NavLink>
      </ul>
    </nav>
  )
}
