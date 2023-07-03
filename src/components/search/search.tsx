import React, {useState} from 'react'
import styles from './search.module.css'
import {CloseButton} from '../../shared/ui/closeButton'
import {SearchButton} from '../../shared/ui/searchButton'
import {Input} from '../../shared/ui/input'
import {mount, unmount} from './model'
import {useStore} from 'effector-react'
import {gifsModel} from '../../entities'
import Loader from '../loader/loader'
import { Gallery } from '../../widgets/gallery'


export function Search() {
  const [query, setQuery] = useState('')
  const {data, isLoadingSuccess} = useStore(
    gifsModel.store.$searchedGifsState
  )

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = evt.target
    setQuery(value)
  }

  const handleClear = () => {
    setQuery('')
    unmount()
  }

  const handleSearch = () => {
    mount(query)
    if (!isLoadingSuccess) {
      return <Loader />
    }
  }

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className={styles.content}>
      <div className={styles.content__control}>
        <Input
          type='text'
          value={query}
          placeholder='Just enter what you are looking for (e.g. cheese)'
          name='query'
          handleChange={handleChange}
          handleKeyDown={handleKeyDown}
        />
        <CloseButton handleClick={handleClear} />
        <SearchButton handleClick={handleSearch} />
      </div>
      <Gallery data={data}/>
    </div>
  )
}
