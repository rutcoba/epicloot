import React from 'react';
import {Link} from 'react-router';

const NavLink = () => (
    <Link activeClassName='is-active' {...props} />
)

export default NavLink;