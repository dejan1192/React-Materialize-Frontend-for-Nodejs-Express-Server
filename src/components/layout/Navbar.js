import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import bg from '../../images/network.jpg';
import img from '../../images/30.jpg';
import AuthContext from '../../context/auth/authContext';
import { useContext } from 'react';

const Navbar = () => {

    const authContext = useContext(AuthContext);
    const { isAuthenticated, logout, user } = authContext;
    const authLinks = 
    (<Fragment>
        
        <li>
        <Link to='/'>Home</Link>
        </li>
        <li>
        <Link to={`/profile/${user && user._id}`} >Profile</Link>
        </li>
        <li>
        <Link  onClick={logout}>
          Logout
        </Link>
        </li>
    </Fragment>)

    const guestLinks = 
    (<Fragment>
         <li>
           <a href='/login'>Login</a>
         </li>
    </Fragment>)


    return (
        <nav className='light-blue darken-3'>
            <div className="nav-wrapper container">
                <a href="#" className="brand-logo right">NetWork</a>
                <ul className="left hide-on-med-and-down">
                    { isAuthenticated? authLinks : guestLinks }
                   
                </ul>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="sidenav" id="mobile-demo">
                     <li><div className="user-view">
                    <div className="background">
                        <img src={bg}/>
                    </div>
                    <a href="#user"><img className="circle" src={img}/></a>
                    <a href="#name"><span className="white-text name">John Doe</span></a>
                    <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                    </div>
                    </li>
                    <li>    
                    <Link to='/'>Home</Link>
                    </li>
                    <li>
                    <Link to='/profile'>Profile</Link>
                    </li>
                    <li>
                    <Link to='/login'>Login</Link>
                    </li>
                </ul>
               
            </div>
      </nav>
    )
}

export default Navbar
