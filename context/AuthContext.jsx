import {createContext, useState, useEffect, useId} from 'react'
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
                const {uid, displayName, email, photoURL} = res
                setUser({
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    id: uid,
                    logout: false
                })
            } else if (router.route !== '/login' && router.route !== '/signup'){
                router.push('/')
            }
            !user.logout && router.push('/home')
        })
        
    },[router.route])

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
