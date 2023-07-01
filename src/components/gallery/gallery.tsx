import React from 'react'
import styles from './gallery.module.css'

export function Gallery() {
  return (
    <section className={styles.gallery} aria-label='Галлерея'>
      <div className={styles.gifs__list}></div>
    </section>
  )
}
