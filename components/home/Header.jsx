import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { authContext } from '../../context/AuthContext'
import defaultImage from '../../assets/userDefault.png'

export default function Header() {
    const [currentTime, setCurrentTime] = useState('')

    const {user} = useContext(authContext)
    const {name, photo} = user
    
    let actualHour = new Date()
    
    useEffect(() => {
        if(actualHour.getHours() >= 2 && actualHour.getHours() < 12) setCurrentTime('Buenos dias')
        else if(actualHour.getHours() >= 12 && actualHour.getHours() < 20) setCurrentTime('Buenas tardes')
        else setCurrentTime('Buenas noches')
    }, [])
    return (
        <header className='header-container'>
            <h1 className='logo'>Forniture.</h1>
            <div className='header-info-container'>
                <div>
                    <h2>{currentTime}, {name}</h2>
                    <p>Explora los mejores muebles</p>
                </div>
                <div className='header-image-container'>
                    <Image
                        alt={name}
                        src={photo ? photo : defaultImage}
                        layout='fill'
                    />
                </div>
            </div>
        </header>
    )
}
