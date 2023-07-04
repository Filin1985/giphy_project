import {useState} from 'react'
import styles from './gallery.module.css'
import {Pagination} from '../../components/pagination'
import {IGiph} from '../../shared/api'

const PAGE_SIZE = 9

export function Gallery({data}: IGiph) {
  console.log(data)
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
          <li key={item.slug} className={styles.gifs__item}>
            <img
              src={item.images.fixed_height.url}
              alt={item.title}
              className={styles.gifs__image}
            />
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
