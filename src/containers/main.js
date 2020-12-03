import React, { Component } from 'react';
import Header from '../component/header';
import Home from './Home';
import {Switch,Route,Redirect} from 'react-router-dom';
import {Generator} from './generator';
import About  from './about';
import Contact  from './contact';
import  Help  from './help'
import Accounts from '../component/accounts';

export class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/generator' component={Generator} />
                    <Route path='/help' component={Help} />
                    <Route path='/aboutus' component={About} />
                    <Route path='/contactus' component={Contact} />
                    <Route path='/accounts' component={Accounts} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        )
    }
}

export default Main;
 