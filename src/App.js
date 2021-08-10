import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Users from './components/Users'
import Posts from './components/Posts'

export default function App() {
   return( <Router>
        <Switch>
            <Route exact path="/" component={Users}/>
            <Route exact path="/posts" component={Posts}/>
            <Route exact path="/posts/:id" component={Posts}/>
            <Redirect to="/"/>
        </Switch>
    </Router> )
}