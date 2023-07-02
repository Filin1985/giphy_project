import React from 'react'
import styles from './footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__copyright}>&copy; {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer;
