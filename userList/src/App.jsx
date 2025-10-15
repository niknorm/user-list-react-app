
import MainPage from "./components/pages/MainPage"
import useFetch from "./components/hooks/useFetch"
import { useState } from "react"

function App() {
const [favorites, setFavorites] = useState([])

const {userData, loading, error} = useFetch()

const addToFavorite = (user) => {
  if(!favorites.some(fav => fav.id === user.id)){
    setFavorites([...favorites, user])
    console.log('Favorites:', favorites)

  }

 

}

if(loading) return <p>Загрузка пользователей</p>
if(error) return <p>Ошибка загрузки</p>

  return (
    <div>
     <MainPage userData={userData} addToFavorite={addToFavorite} />
    </div>
  ) 
}

export default App
