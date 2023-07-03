import {useEffect} from 'react'
import Loader from '../loader/loader'
import styles from './gallery.module.css'
import {mount, unmount} from './model'
import {gifsModel} from '../../entities'
import {useStore} from 'effector-react'
import { Gallery } from '../gallery'


export function Trends() {
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
     <Gallery data={data}/>
  )
}