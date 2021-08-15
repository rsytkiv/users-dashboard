import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Users from './components/Users'
import Posts from './components/Posts'
import PostsByUser from "./components/PostsByUser"
import Post from "./components/Post"

export default function App() {
   return( <Router>
        <Switch>
            <Route exact path="/users" component={Users}/>
            <Route exact path="/posts" component={Posts}/>
            <Route exact path="/posts-by-user/:id" component={PostsByUser}/>
            <Route exact path="/post/:id" component={Post}/>
            <Redirect to="/users"/>
        </Switch>
    </Router> )
}