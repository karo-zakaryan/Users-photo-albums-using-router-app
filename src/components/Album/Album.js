import React from 'react';
import { NavLink } from 'react-router-dom';

const Album = (props) => (
                <li className="Album"> 
                    <NavLink to={"/users/" + props.userId + "/albums/" + props.id}>
                        {props.title}
                    </NavLink>
                </li>
);

export default Album;