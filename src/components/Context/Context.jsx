import React, { useState } from 'react'
import { createContext } from 'react'
import ItemTwo from '../DictionarySection/ItemTwo'

export const userContext = createContext()

function Context() {

    // const [counter, setCounter] = useState(0)
    let counter = [1, 3, 4]
    // we are going to pass counter and setCounter to another componets in context format

    return (
        <div>
            <userContext.Provider value={counter}>
                <ItemTwo />
            </userContext.Provider>
        </div>
    )
}

export default Context
