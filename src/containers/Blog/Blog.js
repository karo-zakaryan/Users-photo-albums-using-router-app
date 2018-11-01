import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Users from "./Users/Users";

export default class Blog extends Component {
  render() {
    return <Route path='/' component={Users} />
  }
}
