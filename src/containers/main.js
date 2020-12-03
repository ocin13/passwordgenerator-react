import React, { Component } from 'react';
import Header from '../component/header';
import Home from './Home';
import {Switch,Route,Redirect} from 'react-router-dom';
import {Generator} from './generator';
import About  from './about';
import Contact  from './contact';
import  Help  from './help'
import Accounts from '../component/accounts';
import Passwords from '../component/Passwords/index';
import {ACCOUNTS} from '../shared/accounts'

export class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            accounts: ACCOUNTS
        }
    }
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/generator' render={() => <Generator accounts={this.state.accounts} />} />
                    <Route path='/help' component={Help} />
                    <Route path='/aboutus' component={About} />
                    <Route path='/contactus' component={Contact} />
                    <Route path='/accounts' component={Accounts} />
                    <Route path='/passwords' component={Passwords} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        )
    }
}

export default Main;
 