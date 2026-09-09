import { NavLink, Outlet } from "react-router-dom";


function Nav (){

    return(
        <>
        <nav >
        <ul className="nav-links">
        <NavLink  to='/'>Home</NavLink>
        <NavLink to='/songlist'>list of songs</NavLink>
        </ul>
        </nav>
        <Outlet />
        </>
    )
}

export default Nav;