import styles from '../UserCard/UserCard.module.css'

function UserCard({user, addToFavorite, isFavoritePage, removeFavorites}) {

    return(
        <>
        <div className={styles['user-card']}>
            <h3>{user.name}</h3>
            <p>last name:{user.username}</p>
            <p>age: {user.age}</p>
            {isFavoritePage ? 
            <button onClick={() => removeFavorites(user)}>Удалить</button> :
            <button onClick={() => addToFavorite(user)}>Добавить в избранное</button>}
        </div>
        
        </>
    )
}

export default UserCard

