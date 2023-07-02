import React from 'react'
import styles from './gallery.module.css'

export function Gallery() {
  return (
    <div className={styles.gallery}>
      <ul className={styles.gifs__list}></ul>
    </div>
  )
}
