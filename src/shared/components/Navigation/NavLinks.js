import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';

import Button from '../FormElements/Button/Button';
import './NavLinks.css';

const NavLinks = props => {
    const auth = useContext(AuthContext);
    return <ul className="nav-links">
        <li>
            <NavLink to="/any1/entry" exact> Anonymous Entries </NavLink>
        </li>
        {auth.isLoggedIn && < li>
            <NavLink to="/:userId/entry" exact> My Entries </NavLink>
        </li>}
        <li>
            <NavLink to="/entry/new" exact> New Entry </NavLink>
        </li>
        {!auth.isLoggedIn && <li>
            <NavLink to="/auth/" > Authenticate </NavLink>
        </li>}
        {auth.isLoggedIn && <li>
            <Button danger onClick={auth.logout}> LOGOUT </Button>
        </li>}
    </ul>
};

export default NavLinks;