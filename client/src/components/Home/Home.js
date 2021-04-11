import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Auth from '../Auth/Auth';

function Home() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path='/'>
                        <h1>Home route</h1>
                    </Route>                    
                    <Route exact path='/auth'>
                        <Auth />
                    </Route>
                    <Route exact path='/auth/profile'>
                        <Profile />
                    </Route>            
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default Home
