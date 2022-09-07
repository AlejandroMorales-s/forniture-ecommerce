import React, { useContext, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {BiStore} from 'react-icons/bi'
import {MdFavoriteBorder} from 'react-icons/md'
import {FiShoppingCart} from 'react-icons/fi'
import profileImage from '../assets/profileImage.jpg'
import { signOut } from 'firebase/auth'
import { auth } from '../libs/firebase'
import { authContext } from '../context/AuthContext'

export default function NavbarMobile() {
    const router = useRouter()
    const {setUser} = useContext(authContext)
    const [menuActive, setMenuActive] = useState(false)

    const logout = () => {
        signOut(auth)
        setUser({
            logout: true
        })
        router.push('/')
    }
    return (
        <nav className='navbar-mobile-container'>
            <Link href={'/home'}>
                <BiStore className={`${router.pathname == "/home" && "active-navbar-icon"} navbar-icon`}/>
            </Link>
            <Link href={'/favorites'}>
                <MdFavoriteBorder className={`${router.pathname == "/favorites" && "active-navbar-icon"} navbar-icon`}/>
            </Link>
            <Link href={'/shopping-cart'}>
                <FiShoppingCart className={`${router.pathname == "/shopping-cart" && "active-navbar-icon"} navbar-icon`}/>
            </Link>
            <div onClick={() => setMenuActive(!menuActive)} className='profile-navbar-container'>
                <div>
                    <Image 
                        alt='profile'
                        src={profileImage}
                    />
                </div>
            </div>
            <div className={`${!menuActive && 'inactive'} navbar-mobile-menu`}>
                <button className='logout-button' onClick={logout}>Cerrar Sesión</button>
            </div>
        </nav>
    )
}
