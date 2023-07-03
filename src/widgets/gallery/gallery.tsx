import { useState } from 'react'
import styles from './gallery.module.css'
import { Pagination } from '../../components/pagination'
import { IGiph } from '../../shared/api'

const PAGE_SIZE = 5

export function Gallery({data}: IGiph) {
  console.log(data);
  const [currentPage, setCurrentPage] = useState(1)
  const [active, setActive] = useState(1)
  const [gifsPerPage] = useState(PAGE_SIZE)

  const indexOfLastPost = currentPage * gifsPerPage
  const indexOfFirstPost = indexOfLastPost - gifsPerPage

  const currentGifs = data.slice(indexOfFirstPost, indexOfLastPost)

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
    <div className={styles.gallery}>
      <ul className={styles.gifs__list}>
        {currentGifs.map((item: IGiph) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.images.downsized.url} alt={item.title} />
          </li>
        ))}
      </ul>
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
