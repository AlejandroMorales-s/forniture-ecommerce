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
            if(res !== null){
                setUser({
                    name: res.displayName,
                    email: res.email,
                    logout: false
                })
            } else if (router.route !== '/login' && router.route !== '/signup'){
                router.push('/')
            }
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
