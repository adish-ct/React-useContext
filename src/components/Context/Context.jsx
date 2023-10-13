import React, { useState } from 'react'
import { useContext, createContext } from 'react'
import ItemTwo from '../DictionarySection/ItemTwo'

export const userContext = createContext()

function Context() {

    const [counter, setCounter] = useState(0)
    // we are going to pass counter and setCounter to another componets in context format

    return (
        <div>
            <userContext.Provider value={{ counter, setCounter }}>
                <ItemTwo />
            </userContext.Provider>
        </div>
    )
}

export default Context
