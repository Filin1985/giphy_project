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
      <button
        className={styles.pagination__item}
        type="button"
      >
1
        </button>
        <button
        className={styles.pagination__button}
        type="button"
      >
        {'Next'}
      </button>
    </div>
  )
}
