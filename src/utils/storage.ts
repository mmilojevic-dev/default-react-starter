const getFromLocalStorage = <T>(key: string, defaultValue: T): T => {
  const item = window.localStorage.getItem(key)
  if (item) {
    try {
      return JSON.parse(item)
    } catch (error) {
      console.error(error)
      window.localStorage.removeItem(key)
    }
  }
  return defaultValue
}

const setToLocalStorage = <T>(key: string, value: T): void => {
  const serializedValue = JSON.stringify(value)
  window.localStorage.setItem(key, serializedValue)
}

const removeFromLocalStorage = (key: string): void => {
  window.localStorage.removeItem(key)
}

const clearLocalStorage = (): void => {
  window.localStorage.clear()
}

export {
  clearLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage
}
