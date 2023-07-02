import React from 'react'
import styles from './search.module.css'
import {CloseButton} from '../../shared/ui/closeButton'
import {SearchButton} from '../../shared/ui/searchButton'
import {Input} from '../../shared/ui/input'

export function Search() {
  return (
    <div className={styles.content}>
      <Input handleChange={() => {}} />
      <CloseButton handleClick={() => console.log('click')} />
      <SearchButton handleClick={() => console.log('click')} />
    </div>
  )
}
