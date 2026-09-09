import { NavLink, Outlet } from "react-router-dom";


function Nav (){

    return(
        <>
        <nav >
        <ul className="nav-links">
        <NavLink  to='/'>Home</NavLink>
        <NavLink to='/songlist'>list of songs</NavLink>
        <NavLink to='/add'>add a song</NavLink>
        </ul>
        </nav>
        <Outlet />
        </>
    )
}

export default Nav;