import React from 'react';
import Landing from './pages/landing';
import { Router, Route, Switch, Link } from 'react-router-dom';
import history from './history';

function App() {
    return (
        <Router history={history}>
            <div>
                <Link to="/landing">Landing</Link>
            </div>
            <Switch>
                <Route path="/landing">
                    <Landing />
                </Route>
            </Switch>
        </Router>
    );

}

export default App;