import React, { useContext } from 'react'
import ItemThree from './ItemThree'
import { userContext } from '../Context/Context'

function ItemTwo() {

    const name = useContext(userContext)
    console.log(name);

    return (
        <>
            <h1>Component 2</h1>
            <h2>Hello name :  {name} </h2>

        </>
    )
}

export default ItemTwo
