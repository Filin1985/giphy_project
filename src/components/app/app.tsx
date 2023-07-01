import {useState} from 'react'
import {Header} from '../header'
import {Gallery} from '../gallery'
import {Search} from '../search/search'
import styles from './app.module.css'

export function App() {
  return (
    <div className=''>
      <Header />
      <Search />
      <Gallery />
    </div>
  )
}
