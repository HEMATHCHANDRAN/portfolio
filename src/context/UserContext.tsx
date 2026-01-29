import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

type User = { name: string; email: string } | null

const UserContext = createContext<{
  user: User
  setUser: (name: string, email: string) => void
  resetUser: () => void
} | null>(null)

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<User>(null)

  const setUser = useCallback((name: string, email: string) => {
    setUserState({ name: name.trim(), email: email.trim() })
  }, [])

  const resetUser = useCallback(() => {
    setUserState(null)
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser, resetUser }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const ctx = useContext(UserContext)
  if (!ctx) throw new Error('useUser must be used within UserProvider')
  return ctx
}
