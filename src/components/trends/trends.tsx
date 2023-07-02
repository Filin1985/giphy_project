import { useState } from 'react'
import { Header } from '../header'
import { Gallery } from '../gallery'
import { Navbar } from '../navbar/navbar'
import styles from './trends.module.css'
import { Pagination } from '../pagination/pagination'

export function App() {
  return (
    <div className=''>
      <Header />
      <Navbar />
      <Gallery />
      <Pagination />
    </div>
  )
}