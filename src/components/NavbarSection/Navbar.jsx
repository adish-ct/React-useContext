import React from 'react'
import "../../css/Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='bg-dark text-center '>
            <ul className='nav-content '>
                <Link to="/" className='nav-link' ><li className="text-white nav-content"> Home </li></Link>
                <Link to="/dictionary" className='nav-link'><li className="text-white nav-content"> Dictionary </li></Link>
                <Link className='nav-link' ><li className="text-white nav-content"> About </li></Link>
            </ul>
        </div>
    )
}

export default Navbar
