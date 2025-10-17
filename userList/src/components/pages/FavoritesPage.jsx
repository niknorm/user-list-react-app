import { useState } from "react"
import UserCard from "../UserCard"
import '../styles/global.css'

function FavoritesPage({favorites, removeFavorites}) {
    const [inputQuery, setInputQuery] = useState('')

    const filteredUsers = favorites.filter(user => user.name.toLowerCase().includes(inputQuery.toLowerCase()))

    return(
        <>
        <div className="input-favorites">
            <input placeholder="Введите имя для поиска" onChange={(e) => setInputQuery(e.target.value)} value={inputQuery} type="text" />
        </div>
        <div className="cards-container">

        {filteredUsers.map(user => (
            <UserCard
            key={user.id}
            user={user}
            removeFavorites={() => removeFavorites(user)}
            isFavoritePage={true}
            />
        ))}
        </div>
        </>
    )
}

export default FavoritesPage