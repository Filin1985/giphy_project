import React from 'react'
import styles from './closeButton.module.css'
import {CloseIcon} from '../../icons/close-icon'

export type TButtonProps = {
  handleClick: () => void
}

export function CloseButton({handleClick}: TButtonProps) {
  return (
    <button className={styles.button} onClick={handleClick}>
      <CloseIcon />
    </button>
  )
}
