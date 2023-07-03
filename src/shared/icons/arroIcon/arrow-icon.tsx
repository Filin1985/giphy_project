import React from 'react'
import styles from './arrowIcon.module.css'

type TIconArrow = {
  direction: 'right' | 'left'
}

export const IconArrow: React.FC<TIconArrow> = ({direction}) => (
  <svg
    className={styles.icon}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='#929EAD'
    xmlns='http://www.w3.org/2000/svg'
  >
    {direction === 'right' ? (
      <path d='M8.83984 7.41L13.4198 12L8.83984 16.59L10.2498 18L16.2498 12L10.2498 6L8.83984 7.41Z' />
    ) : null}

    {direction === 'left' ? (
      <path d='M15.1602 7.41L10.5802 12L15.1602 16.59L13.7502 18L7.75016 12L13.7502 6L15.1602 7.41Z' />
    ) : null}
  </svg>
)
