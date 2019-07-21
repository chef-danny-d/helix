import React from 'react';
import Cont from './components/layout/Cont'
import Navigation from './components/NavigationBar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Files from './components/pages/Files'
import Upload from './components/pages/Upload'
import Trash from './components/pages/Trash'
import Shared from './components/pages/Shared'
import Account from './components/pages/Account'
import Profile from './components/pages/Profile'
import Billing from './components/pages/Billing'
import Privacy from './components/pages/Privacy'
import NoMatch from './components/pages/NoMatch'

function App() {
    return (
        <React.Fragment>
            <Router>
                <Navigation />
                <Cont>
                    <Switch>
                        <Route path="/upload" component={Upload}/>
                        <Route exact path="/" component={Files}/>
                        <Route path="/trash" component={Trash}/>
                        <Route path="/shared" component={Shared}/>
                        <Route path="/account" component={Account}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/billing" component={Billing}/>
                        <Route path="/privacy" component={Privacy}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </Cont>
            </Router>
        </React.Fragment>
    );
}

export default App;
