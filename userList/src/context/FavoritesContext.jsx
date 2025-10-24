import {createContext, useContext, useState, useEffect } from "react"

const FavoritesContext = createContext()

export function FavoritesProvider({children}){
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('favorites')
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    },[favorites])

    const addToFavorite = (user) => {
      if(!favorites.some(fav => fav.id === user.id)){
        setFavorites([...favorites, user])
    

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



return (
    <FavoritesContext.Provider value={{favorites, addToFavorite, removeFavorites, handleAddUser}}>
        {children}
    </FavoritesContext.Provider>

)

}

export const useFavorites = () => useContext(FavoritesContext)


