import './style.css'

import { House, Ticket, User } from "phosphor-react";
import { Link } from 'react-router-dom'



export function NavMenu() {

    return (
        <nav className='navbar-menu'>
        <Link to={`/`}><House size={20} /></Link>
        <a href="#"><Ticket size={20} /></a>
        <a href="#"><User size={20}  /></a>
        </nav>
    )
}