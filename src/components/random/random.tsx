import React, {useEffect} from 'react'
import Loader from '../loader/loader'
import styles from './random.module.css'
import {mount, unmount} from './model'
import {gifsModel} from '../../entities'
import {useStore} from 'effector-react'
import {IGiph} from '../../shared/api'

interface IData {
  data: IGiph
  isLoadingSuccess: boolean
}

export function Random() {
  const {data, isLoadingSuccess}: IData = useStore(
    gifsModel.store.$randomGifState
  )

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
    <>
      {Object.keys(data).length !== 0 && (
        <div className={styles.content}>
          <h3>{data.title}</h3>
          <img
            className={styles.content__image}
            src={data.images.downsized.url}
            alt={data.title}
          />
        </div>
      )}
    </>
  )
}
