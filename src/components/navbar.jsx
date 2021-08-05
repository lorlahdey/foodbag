import React from 'react'
import { Link , useHistory } from 'react-router-dom';
import '../styles/navbar.css'


const Navbar = () => {

    const history = useHistory();
    return (
        <div>



            <nav className='navbar'> 

                <div className="foodbag-logo">
                    <Link className='logo' to='/home'>Food<span>Bag<span></span></span></Link>
                </div>
                <div className="menu">
                    <Link className='link' to='/cart'>Cart</Link>
                    <br />
                    <Link className='link' to='/login'>Login</Link>
                    <br />
                    <Link className='link signUp' to='/sign-up'>Sign up</Link>
                </div>
			
		    </nav>
        </div>
    )
}

export default Navbar
