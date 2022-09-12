import React, { useContext } from 'react'
import Image from 'next/image'
import { authContext } from '../../context/AuthContext'
import defaulImage from '../../assets/userDefault.png'

export default function Header() {
    const {user} = useContext(authContext)
    const {name, photo} = user
    return (
        <header className='header-container'>
            <h1 className='logo'>Forniture.</h1>
            <div className='header-info-container'>
                <div>
                    <h2>Buenos dias, {name}</h2>
                    <p>Explora los mejores muebles</p>
                </div>
                <div className='header-image-container'>
                    <Image
                        alt={name}
                        src={photo ? user.photo : defaulImage}
                        layout='fill'
                    />
                </div>
            </div>

        </header>
    )
}
