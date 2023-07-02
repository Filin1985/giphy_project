import {useState, useEffect} from 'react'
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from 'react-router-dom'
import {Header} from '../header'
import {Gallery} from '../gallery'
import {Search} from '../search/search'
import {Navbar} from '../navbar/navbar'
import {Random} from '../random'
import {Pagination} from '../pagination/pagination'
import {useStore} from 'effector-react'
import styles from './app.module.css'

export function App() {
  return (
    <main className=''>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/trends' element={<Gallery />} />
        <Route path='/random' element={<Random />} />
      </Routes>
      <Pagination />
  )
}
