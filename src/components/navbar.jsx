import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className='navbar'> 
                <div className="foodbag-logo">
                    <Link className='logo' to='/'>Food<span>Bag<span></span></span></Link>
                </div>
                <div className="menu">
                    <Link className='link' to='/cart'>Cart</Link>
                    <br />
                    <Link className='link' to='#'>Login</Link>
                    <br />
                    <Link className='link signUp' to='#'>Sign up</Link>
                </div>
		    </nav>
        </div>
    )
}

export default Navbar