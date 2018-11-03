import React from 'react';
import { Route } from 'react-router-dom';
import Users from "./Users/Users";

const Blog = () => <Route path='/' component={Users} />

export default Blog;