import React, { useContext } from 'react'
import ItemFive from './ItemFive'
import { userContext } from '../Context/Context'

function ItemFour() {
    let value = useContext(userContext)

    return (
        <>
            <h1>Component 4</h1>
            <h2>Hello : {value} </h2>
            <ItemFive />
        </>
    )
}

export default ItemFour
