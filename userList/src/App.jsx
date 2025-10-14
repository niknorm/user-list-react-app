import { useEffect, useState } from "react"
import MainPage from "./components/pages/MainPage"

function App() {
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      if(!res.ok) {
        throw new Error('error')
      }
      return res.json()
    })
    .then((data) => setUserData(data))
    .catch(() => setError(true))
    .finally(() => setLoading(false))
  },[])

  if(loading) return <p>Загрузка пользователей</p>
  if(error) return <p>Ошибка загрузки</p>

  return (
    <div>
     <MainPage userData={userData} />
    </div>
  ) 
}

export default App
