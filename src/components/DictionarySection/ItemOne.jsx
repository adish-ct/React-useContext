import React, { useContext } from 'react'
import { useState, useEffect, useRef } from 'react'
import ItemTwo from './ItemTwo'
import Context, { userContext } from '../Context/Context'

function ItemOne(props) {

    return (
        <>
            <h1>Component 1</h1>
            <Context />
        </>

    )
}


export default ItemOne
