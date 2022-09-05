import Image from 'next/image'
import React from 'react'
import {BiDotsVerticalRounded} from 'react-icons/bi'

export default function Products({products}) {
    return (
        <>
            {products.map(({id, data:product}) =>  {
                const {name, price, image, category} = product
                return <div className='product-card' key={id}>
                    <div className='product-image-container'>
                        <Image alt={name} layout='fill' src={image[0]}/>
                    </div>
                    <div className='product-card-info'>
                        <div>
                            <h3>{name}</h3>
                            <p>${price} MXN</p>
                        </div>
                        <BiDotsVerticalRounded className='product-card-icon'/>
                    </div>
                </div>
            })}
        </>
    )
}
