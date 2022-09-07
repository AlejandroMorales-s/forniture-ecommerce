import {createContext, useState, useEffect} from 'react'
import {auth} from '../libs/firebase'
import {onAuthStateChanged} from 'firebase/auth'
import { useRouter } from 'next/router'

export const authContext = createContext()

export default function AuthContext({children}) {
    const router = useRouter()
    const [user, setUser] = useState({
        logout: true
    })
    useEffect(() => {
        onAuthStateChanged(auth, (res) => {
            res !== null && setUser({
                    name: res.displayName,
                    email: res.email,
                    logout: false
                })
            })
    },[])

    return (
        <authContext.Provider
            value={{
                user, 
                setUser
            }}
        >
            {children}
        </authContext.Provider>
    )
}
