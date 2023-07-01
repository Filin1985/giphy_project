import React from 'react'
import styles from './input.module.css'

export type TInputProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input({handleChange}: TInputProps) {
  return (
    <input
      className={styles.input}
      type='text'
      placeholder='Поле поиска'
      onChange={handleChange}
    />
  )
}
