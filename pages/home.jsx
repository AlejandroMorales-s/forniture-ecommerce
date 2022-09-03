import React from 'react'

import Header from '../components/home/Header'
import SearchInput from '../components/home/SearchInput'


export default function home() {
    return (
        <>
            <Header/>
            <main className='main'>
                <SearchInput/>

            </main>

        </>
    )
}
