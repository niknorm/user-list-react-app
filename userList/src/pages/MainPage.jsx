import { useFavorites } from "../context/FavoritesContext"
import UserCard from "../components/UserCard/UserCard"
import '../styles/global.css'

function MainPage({userData}) {

    const {addToFavorite} = useFavorites()
    

    return (
       <>
       <div className="cards-container">

        {userData.map(user => (
            <UserCard
            key={user.id}
            user={user}
            addToFavorite={() => addToFavorite(user)}
            isFavoritePage={false}
            />
        ))}

       </div>
       
       </>
    )
}

export default MainPage