import React, { useContext } from 'react'
import Image from 'next/image'
import greenFigure from "../../assets/greenFigure.png"
import { authContext } from '../../context/AuthContext'

export default function Header() {
    const {user} = useContext(authContext)
    return (
        <header className='header-container'>
            <div className='header-image-container'>
                <Image 
                    className='header-image'
                    src={greenFigure} 
                    alt='green figure'
                />
            </div>
            <div className='header-greeting-container'>
                <h1>Buenos dias, {user.name}</h1>
                <p>Explora los productos que tenemos para ti</p>
            </div>
        </header>
    )
}
