import React from 'react'
import globe from '../images/globe.svg'

function Navbar() {
    return (
        <div className='navbar'>
            <img className='globe' src={globe}/>
            <p>my travel journal.</p>
        </div>
    )
}

export default Navbar
