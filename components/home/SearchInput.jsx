import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

export default function SearchInput() {
    return (
        <div className='search-input-container'>
            <input className='search-input' type="text" placeholder='Silla, escritorio...'/>
            <AiOutlineSearch className='search-input-icon'/>
        </div>
    )
}
