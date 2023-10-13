import React, { useContext } from 'react'
import ItemThree from './ItemThree'
import { userContext } from '../Context/Context'

function ItemTwo() {

    const counter = useContext(userContext)

    return (
        <>
            <h1>Component 2</h1>
            <h2> counter :  {counter} </h2>
            <ItemThree />
        </>
    )
}

export default ItemTwo
