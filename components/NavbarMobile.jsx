import React from 'react'
import Image from 'next/image'
import {BiStore} from 'react-icons/bi'
import {MdFavoriteBorder} from 'react-icons/md'
import {FiShoppingCart} from 'react-icons/fi'
import profileImage from '../assets/profileImage.jpg'

export default function NavbarMobile() {
    return (
        <div className='navbar-mobile-container'>
            <BiStore className='navbar-icon'/>
            <MdFavoriteBorder className='navbar-icon'/>
            <FiShoppingCart className='navbar-icon'/>
            <div className='profile-navbar-container'>
                <div>
                    <Image 
                        alt='profile'
                        src={profileImage}
                    />
                </div>
            </div>
        </div>
    )
}
