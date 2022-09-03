import React from 'react'
import Image from 'next/image'
import greenFigure from "../../assets/greenFigure.png"

export default function Header() {
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
                <h1>Buenos dias, Alejandro</h1>
                <p>Explora los productos que tenemos para ti</p>
            </div>
        </header>
    )
}
