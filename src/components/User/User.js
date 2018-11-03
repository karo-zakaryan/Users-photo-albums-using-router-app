import React from 'react';
import { NavLink } from 'react-router-dom';

const User = (props) => (
    <li className="User"> 
            <NavLink to={"/users/" + props.id}>
                {props.name}
            </NavLink> 
    </li>
);

export default User;