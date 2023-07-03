import React from 'react'
import styles from './input.module.css'

export type TInputProps = {
  type: string
  placeholder: string
  name: string
  value: string | number
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export function Input({
  handleChange,
  handleKeyDown,
  type,
  placeholder,
  name,
  value,
}: TInputProps) {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  )
}
