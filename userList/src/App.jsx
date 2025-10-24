import {FavoritesProvider} from './context/FavoritesContext'
import useFetch from "./hooks/useFetch"
import { useState } from "react"
import Navigation from './components/Navigation/Navigation'
import PageRanderer from './components/PageRenderer/PageRenderer'

function App() {

const {userData, loading, error} = useFetch()
const [page, setPage] = useState('main')

if(loading) return <p>Загрузка пользователей</p>
if(error) return <p>Ошибка загрузки</p>

  return (
    <FavoritesProvider>
      <Navigation page={page} setPage={setPage} />
      <PageRanderer page={page} userData={userData} />
    </FavoritesProvider>
  ) 
}

export default App
