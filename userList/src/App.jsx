import {FavoritesProvider} from './context/FavoritesContext'
import MainPage from "./pages/MainPage"
import useFetch from "./hooks/useFetch"
import { useState } from "react"
import FavoritesPage from "./pages/FavoritesPage"

function App() {

const {userData, loading, error} = useFetch()
const [page, setPage] = useState('main')

if(loading) return <p>Загрузка пользователей</p>
if(error) return <p>Ошибка загрузки</p>

  return (
    <FavoritesProvider>
    <nav className="header-nav">
      <button className="button-nav" onClick={() => setPage('main')}>Главная</button>
      <button className="button-nav" onClick={() => setPage('favorites')}>Избранные</button>
    </nav>
    <div>
      {page === 'main' ? 
      <MainPage userData={userData} /> :
      <FavoritesPage/> }
      
    </div>
    </FavoritesProvider>
  ) 
}

export default App
