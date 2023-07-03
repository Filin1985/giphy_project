import React, {useEffect} from 'react'
import Loader from '../loader/loader'
import styles from './gallery.module.css'
import {mount, unmount} from './model'
import {gifsModel} from '../../entities'
import {useStore} from 'effector-react'

export function Gallery() {
  const {data, isLoadingSuccess} = useStore(gifsModel.store.$gifsState)

  useEffect(() => {
    mount()

    return () => {
      unmount()
    }
  }, [])

  if (!isLoadingSuccess) {
    return <Loader />
  }

  return (
    <div className={styles.gallery}>
      <ul className={styles.gifs__list}>
        {data.map((item: any) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.images.downsized.url} alt={item.title} />
          </li>
        ))}
      </ul>
    </div>
  )
}
