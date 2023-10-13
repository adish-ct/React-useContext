import React, { useState } from 'react'
import { useContext, createContext } from 'react'
import ItemTwo from '../DictionarySection/ItemTwo'
import ItemThree from '../DictionarySection/ItemThree'
import ItemOne from '../DictionarySection/ItemOne'

export const userContext = createContext()

function Context() {

    let value = "React JS"
    // we are going to pass counter and setCounter to another componets in context format

    return (
        <div>
            <userContext.Provider value={value}>
                <ItemTwo />
                <ItemOne />
            </userContext.Provider>
        </div>
    )
}

export default Context
