import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

type Serialize<T> = (value: T) => string
type Deserialize<T> = (value: string) => T

interface UseLocalStorageStateOptions<T> {
  serialize?: Serialize<T>
  deserialize?: Deserialize<T>
}

type LocalStorageState<T> = [T, Dispatch<SetStateAction<T>>]

const useLocalStorageState = <T>(
  key: string,
  defaultValue: T,
  {
    serialize = JSON.stringify,
    deserialize = JSON.parse
  }: UseLocalStorageStateOptions<T> = {}
): LocalStorageState<T> => {
  const [state, setState] = useState<T>(() => {
    const valueInLocalStorage = window.localStorage.getItem(key)
    if (valueInLocalStorage) {
      try {
        return deserialize(valueInLocalStorage)
      } catch (error) {
        window.localStorage.removeItem(key)
        throw error
      }
    }
    return defaultValue
  })

  const prevKeyRef = useRef<string>(key)

  useEffect(() => {
    const prevKey = prevKeyRef.current
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey)
    }
    prevKeyRef.current = key
    window.localStorage.setItem(key, serialize(state))
  }, [key, state, serialize])

  return [state, setState]
}

export { useLocalStorageState }
