import React from 'react'
import styles from './pagination.module.css'

export function Pagination({}) {
  return (
    <div className={styles.pagination__list}>
      <button
        className={styles.pagination__button}
        type="button"
      >
        {'Previous'}
      </button>
        <p className={styles.pagination__item}>
1
        </p>
        <button
        className={styles.pagination__button}
        type="button"
      >
        {'Next'}
      </button>
    </div>
  )
}
