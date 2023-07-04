import {Route, Routes, Navigate} from 'react-router-dom'
import {Header} from '../header'
import {Trends} from '../trends/trends'
import {Search} from '../search/search'
import {Navbar} from '../navbar/navbar'
import {Random} from '../random'
import styles from './app.module.css'
import {Footer} from '../footer'

export function App() {
  return (
    <>
      <main className={styles.container}>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/trends' element={<Trends />} />
          <Route path='/random' element={<Random />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
