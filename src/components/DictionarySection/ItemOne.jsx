import React from 'react'
import { useState, useEffect, useRef } from 'react'
import ItemTwo from './ItemTwo'

function ItemOne(props) {


    return (
        <>
            <h1>Component 1</h1>
            <h2>Hello </h2>
            <ItemTwo />
        </>

    )
}


export default ItemOne
