import { useState } from 'react'
import { Header } from '../header'
import { Gallery } from '../gallery'
import { Search } from '../search/search'
import { Navbar } from '../navbar/navbar'
import styles from './app.module.css'
import { Pagination } from '../pagination/pagination'
import {Footer} from '../footer/footer'

export function App() {
  return (
    <div className=''>
      <Header />
      <Navbar />
      <Search />
      <Gallery />
      <Pagination />
      <Footer />
    </div>
  )
}
