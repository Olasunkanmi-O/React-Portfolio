
import {NavLink} from 'react-router-dom'


function Header () {
    return(
        <header>
            <h1>Olasunkanmi</h1>
            <nav>
                <NavLink to="/"></NavLink>
                <NavLink to="/About">About</NavLink>
                <NavLink to="/Project">Project</NavLink>
                <NavLink to="/Contact">Contact</NavLink>
                
            </nav>
        </header>
    )
}

export default Header