// css styles 
import styles from "../../styles/navbar.module.css";
// import form react router
import { Outlet, NavLink } from "react-router-dom";

// Navbar Component
export default function Navbar(){
    return(
        <>
            {/* main container */}
            <div className={styles.navbarContainer}> 
                {/* app heading */}
                <div className={styles.appName}>
                    <NavLink to="/">
                        BRICKFOLIO
                    </NavLink>
                </div>

                {/* all the navigation link */}
                <div className={styles.navLinks}>

                    <NavLink to="/products">
                        <span>
                            {/* home logo */}
                            <i class="fa-solid fa-house"></i>
                            Products
                        </span>
                    </NavLink>

                    {<NavLink to="/products/categories">
                        <span>
                            <i class="fa-solid fa-icons"></i>
                            Categories
                        </span>
                    </NavLink> }                   
                </div>
            </div>
            {/* render child pages */}
            <Outlet />
        </>
    )
}