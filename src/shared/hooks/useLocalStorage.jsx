import { useState } from "react"

import { Storage } from '../services'

const useLocalStorage = (key, value) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = Storage.get(key)
    return item || value
  })

  const setValue = (value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value
    setStoredValue(valueToStore)
    Storage.set(key, JSON.stringify(valueToStore))
  }

  return [storedValue, setValue]
}

export default useLocalStorage
