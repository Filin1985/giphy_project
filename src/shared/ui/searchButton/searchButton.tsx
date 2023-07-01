import React from 'react'
import styles from './searchButton.module.css'
import {SearchIcon} from '../../icons/search-icon'

export type TButtonProps = {
  handleClick: () => void
}

export function SearchButton({handleClick}: TButtonProps) {
  return (
    <button className={styles.button} onClick={handleClick}>
      <SearchIcon />
    </button>
  )
}
