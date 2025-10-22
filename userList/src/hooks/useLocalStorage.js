import { useEffect, useState } from "react"



function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const saved = localStorage.getItem(key)
            return saved ? JSON.parse(saved) : initialValue 
        } catch (error) {
            console.error('Ошибка чтения', error)
            return initialValue
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.error('ошибка записи', error)
        }
    },[key, value])

    return [value, setValue]
}

export default useLocalStorage