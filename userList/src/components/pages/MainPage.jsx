import UserCard from "../UserCard"
import '../styles/global.css'

function MainPage({userData,addToFavorite}) {
    

    return (
       <>
       <div className="cards-container">

        {userData.map(user => (
            <UserCard
            key={user.id}
            user={user}
            addToFavorite={() => addToFavorite(user)}
            />
        ))}

       </div>
       
       </>
    )
}

export default MainPage