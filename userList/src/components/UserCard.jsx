import styles from './styles/UserCard.module.css'

function UserCard({user, addToFavorite}) {

    return(
        <>
        <div className={styles['user-card']}>
            <h3>{user.name}</h3>
            <p>last name:{user.username}</p>
            <p>age:{Math.floor(Math.random() * 100) + 1}</p>
            <button onClick={() => addToFavorite(user)}></button>
        </div>
        
        </>
    )
}

export default UserCard