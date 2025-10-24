import FavoritesPage from "../../pages/FavoritesPage";
import MainPage from "../../pages/MainPage";


function PageRanderer({page, userData}) {

    if (page === 'main') {
        return <MainPage userData={userData} />
    }
    if(page === 'favorites') {
        return <FavoritesPage />
    }

    return <p>Страница не найдена</p>
}

export default PageRanderer