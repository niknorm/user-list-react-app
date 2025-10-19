
import MainPage from "./components/pages/MainPage"
import useFetch from "./components/hooks/useFetch"
import { useState } from "react"
import FavoritesPage from "./components/pages/FavoritesPage"
import useLocalStorage from "./components/hooks/useLocalStorage"

function App() {
const [favorites, setFavorites] = useLocalStorage('favorites', [])
const {userData, loading, error} = useFetch()
const [page, setPage] = useState('main')

const addToFavorite = (user) => {
  if(!favorites.some(fav => fav.id === user.id)){
    setFavorites([...favorites, user])
    console.log('Favorites:', favorites)

  }
}

const removeFavorites = (user) => {
  setFavorites(favorites.filter(fav => fav.id !== user.id))
}

 const handleAddUser = (newUserData) => {
        const newUser = {
            ...newUserData,
            id: Date.now()
        }
        setFavorites([...favorites, newUser])
    }

if(loading) return <p>Загрузка пользователей</p>
if(error) return <p>Ошибка загрузки</p>

  return (
    <>
    <nav className="header-nav">
      <button className="button-nav" onClick={() => setPage('main')}>Главная</button>
      <button className="button-nav" onClick={() => setPage('favorites')}>Избранные</button>
    </nav>
    <div>
      {page === 'main' ? 
      <MainPage userData={userData} addToFavorite={addToFavorite} /> :
      <FavoritesPage favorites={favorites} removeFavorites={removeFavorites} handleAddUser={handleAddUser} /> }
      
    </div>
    </>
  ) 
}

export default App
