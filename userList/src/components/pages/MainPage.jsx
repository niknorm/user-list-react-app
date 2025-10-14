
function MainPage({userData}) {
    

    return (
        <>
        <ul>
            {userData.map((user, id) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
        </>
    )
}

export default MainPage