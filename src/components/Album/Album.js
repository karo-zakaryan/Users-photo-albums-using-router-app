import React from 'react';
import { Link } from 'react-router-dom';

import "./Album.css";

const Album = (props) => (
                <li className="Album"> 
                    <Link to={"/albums/" + props.id + "/photos"}>{props.title}</Link>
                    {/* <Route path={"/users/" + props.id} render={() => <Albums userId={props.id} /> } /> */}
                </li>
);

export default Album;