import React, { useContext } from 'react'
import ItemFour from './ItemFour'
import { userContext } from '../Context/Context';


function ItemThree() {

    const value = useContext(userContext)

    return (
        <div>
            <h1> Component 3 {value} </h1>
            <ItemFour />
        </div>
    );
}

export default ItemThree;
