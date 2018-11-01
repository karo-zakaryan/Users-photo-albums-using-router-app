import React, { Component, Fragment } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Albums from '../Albums/Albums';

import "./Users.css";

export default class Users extends Component {
   constructor(props) {
       super(props)
       
       this.state = {
           users: null
       }
   }

   componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({users: users}))
   }
   
  render() {
    let users;
    (this.state.users) 
        ?
        users = this.state.users.map(user => {
            return <li key={user.id} className="User"> 
                        <NavLink to={"/users/" + user.id + "/albums"}>{user.name}</NavLink> 
                    </li>
        })
        : 
        users = null
    
    return (
        <Fragment>
            <div className="Users">
                <h1>Users</h1>
                <ul>
                    {users}
                </ul>
            </div>
            <Route path={"/users/:id"} component={Albums} />
        </Fragment>
    );
  }
}