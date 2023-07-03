import cn from 'classnames'
import {IconArrow} from '../../shared/icons/arroIcon/arrow-icon'
import styles from './pagination.module.css'

interface IPaginator {
  gifsPerPage: number
  totalGifs: number
  paginate: (number: number) => void
  previousPage: () => void
  nextPage: () => void
  active: number
}

export const Pagination = ({
  gifsPerPage,
  totalGifs,
  paginate,
  previousPage,
  nextPage,
  active,
}: IPaginator) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalGifs / gifsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <ul className={styles.container}>
      <li onClick={previousPage} className={styles.container__item}>
        <IconArrow direction='left' />
      </li>
      {pageNumbers.map((number) => (
        <li
          key={number}
          onClick={() => paginate(number)}
          className={
            active === number
              ? styles.container__item_active
              : styles.container__item
          }
        >
          {number}
        </li>
      ))}
      <li onClick={nextPage} className={styles.container__item}>
        {<IconArrow direction='right' />}
      </li>
    </ul>
  )
}
