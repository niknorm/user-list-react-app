import { useState } from "react"
import UserCard from "../components/UserCard/UserCard"
import '../styles/global.css'
import styles from '../styles/Modal.module.css'
import CreateEditForm from "../components/CreateEditForm/CreateEditForm"

function FavoritesPage({favorites = [], removeFavorites, handleAddUser}) {
    const [inputQuery, setInputQuery] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    const filteredUsers = favorites.filter(user => user.name.toLowerCase().includes(inputQuery.toLowerCase()))

   
    return(
        <>
        <div className="input-favorites">
            <input placeholder="Введите имя для поиска" onChange={(e) => setInputQuery(e.target.value)} value={inputQuery} type="text" />
            <button onClick={() => setIsModalOpen(true)}>Добавить своего</button>
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

        {isModalOpen && (
            <div className={styles['modal-overlay']}>
                <div className={styles["modal-content"]}>
                    <button className={styles['modal-close']} onClick={() => setIsModalOpen(false)}>✖</button>
                    <CreateEditForm onSubmit={handleAddUser} onClose={() => setIsModalOpen(false)} />
                </div>
            </div>
        )}
        </>
    )
}

export default FavoritesPage