import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'
import { signOut } from "firebase/auth";
import styles from './Navbar.module.css'
const Navbar = (props) => {
    //logout using firebase
const logOut = () => {
        signOut(auth);
}
  return (
    <>
       <div className={styles.main}>
        <div className={styles.logo}><Link className={styles.links} to='/'>Home</Link></div>
        <div className={styles.navbar}>
         
        <li>
            {/* conditionally rendering login/logout links */}
              {props.name ? <Link className={styles.links} onClick={logOut} >Logout</Link> : <Link className={styles.links} to='/login'>LogIn</Link>}
                
            </li>
            <li>

                <Link className={styles.links} to='/signup'>SignUp</Link>
            </li> 
        </div> 
        </div>
    </>
  )
}

export default Navbar