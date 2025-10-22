 import { useEffect, useState } from "react"
 
function useFetch() {
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
    .then((data) => {
      const ageUser = data.map((user) => ({
        ...user,
        age: Math.floor(Math.random() * 100) + 1,
      }))
      setUserData(ageUser)
    })
    .catch(() => setError(true))
    .finally(() => setLoading(false))
  },[])

  return {userData, loading, error}

}

export default useFetch

