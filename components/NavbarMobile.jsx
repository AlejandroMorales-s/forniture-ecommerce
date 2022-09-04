import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {BiStore} from 'react-icons/bi'
import {MdFavoriteBorder} from 'react-icons/md'
import {FiShoppingCart} from 'react-icons/fi'
import profileImage from '../assets/profileImage.jpg'

export default function NavbarMobile() {
    const router = useRouter()
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
            <div className='profile-navbar-container'>
                <div>
                    <Image 
                        alt='profile'
                        src={profileImage}
                    />
                </div>
            </div>
        </nav>
    )
}
