import React, {useState} from 'react'
import styles from './search.module.css'
import {CloseButton} from '../../shared/ui/closeButton'
import {SearchButton} from '../../shared/ui/searchButton'
import {Input} from '../../shared/ui/input'
import {mount, unmount} from './model'
import {useStore} from 'effector-react'
import {gifsModel} from '../../entities'
import {Pagination} from '../pagination'
import Loader from '../loader/loader'

const PAGE_SIZE = 5

export function Search() {
  const [query, setQuery] = useState('')
  const {data, isLoadingSuccess}: any = useStore(
    gifsModel.store.$searchedGifsState
  )
  const [currentPage, setCurrentPage] = useState(1)
  const [active, setActive] = useState(1)
  const [gifsPerPage] = useState(PAGE_SIZE)

  const indexOfLastPost = currentPage * gifsPerPage
  const indexOfFirstPost = indexOfLastPost - gifsPerPage

  const currentGifs = data.slice(indexOfFirstPost, indexOfLastPost)

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

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    setActive(pageNumber)
  }

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
      paginate(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (currentPage !== Math.ceil(data.length / gifsPerPage)) {
      setCurrentPage(currentPage + 1)
      paginate(currentPage + 1)
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
      <div className={styles.content__list}>
        <ul className={styles.gifs__list}>
          {currentGifs.map((item: any) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <img src={item.images.downsized.url} alt={item.title} />
            </li>
          ))}
        </ul>
      </div>
      {data.length > 0 && (
        <Pagination
          gifsPerPage={gifsPerPage}
          totalGifs={data.length}
          paginate={paginate}
          previousPage={previousPage}
          nextPage={nextPage}
          active={active}
        />
      )}
    </div>
  )
}
