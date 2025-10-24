

function Navigation({setPage}) {

    return (
        <nav className="header-nav">
            <button className="button-nav" onClick={() => setPage('main')}>Главная</button>
            <button className="button-nav" onClick={() => setPage('favorites')}>Избранные</button>
        </nav>
    )
}

export default Navigation