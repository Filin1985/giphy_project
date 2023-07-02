import React, {useEffect} from 'react'
import Loader from '../loader/loader'
import styles from './gallery.module.css'
import {mount} from './model'
import {gifsModel} from '../../entities'
import {useStore} from 'effector-react'

export function Gallery() {
  const {data} = useStore(gifsModel.store.$gifsState)

  useEffect(() => {
    console.log('object')
    mount()
  }, [])

  if (data.length === 0) {
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
