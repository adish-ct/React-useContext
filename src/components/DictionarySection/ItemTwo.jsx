import React, { useContext } from 'react'
import ItemOne from './ItemThree'
import ItemThree from './ItemThree'
import { userContext } from '../Context/Context'

function ItemTwo() {

    useContext(userContext)

    return (
        <>
            <h1>Component 2</h1>
            <h2>Hello count :  </h2>
            <ItemThree />
        </>
    )
}

export default ItemTwo
