import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import ReactLoading from 'react-loading';
import Albums from '../Albums/Albums';
import User from '../../../components/User/User';

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
        users = this.state.users.map(user => (
            <User 
                key={user.id}
                id={user.id} 
                name={user.name}/> 
        ))
        : 
        users = <ReactLoading type="spokes" color="red" width="50px"height="50px" />
    
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