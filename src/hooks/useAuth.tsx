import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  UserCredential
} from 'firebase/auth'

import { auth } from '../lib/firebase'

export const AuthContext = createContext({} as AuthProps)

interface User {
  uid: string
  displayName: string
  email: string
}
interface AuthProps {
  user: User
  loading: boolean
  login: (email: string, password: string) => Promise<UserCredential>
  logout: () => Promise<void>
}

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email
        })
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  function login(email: string, password: string) {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    setLoading(true)
    return signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
