import React from 'react'
import {database} from '../libs/firebase'
import { collection, getDocs } from 'firebase/firestore'
import Products from '../components/Products'
import Header from '../components/home/Header'
import SearchInput from '../components/home/SearchInput'
import Categories from '../components/home/Categories'
import NavbarMobile from '../components/NavbarMobile'


export const getServerSideProps = async () => {
    const col = collection(database, "products")
    const querySnapshot = await getDocs(col)
    const products = []

    querySnapshot.forEach(doc => {
        products.push({
            id: doc.id,
            data: doc.data()
        })
    })

    return{
        props:{
            products
        }
    }
}

export default function home({products}) {
    return (
        <>
            <Header/>
            <main className='main'>
                <SearchInput/>
                <Categories/>
                <div className='products-home-container'>
                    <Products products={products}/>
                </div>
            </main>
            <NavbarMobile/>
        </>
    )
}
