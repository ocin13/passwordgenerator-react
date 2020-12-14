import React, { Component } from 'react';
import Header from '../component/header';
import Home from './Home';
import {Switch,Route,Redirect} from 'react-router-dom';
import {Generator} from './generator';
import Info  from './info';
import Contact  from './contact';
import  Help  from './help'
import Accounts from '../component/accounts';
import Passwords from '../component/Passwords/index';
import  {DATA}  from '../shared/data';
import { ACCOUNTS } from '../shared/accounts';

export class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: DATA,
            accounts: ACCOUNTS
        }
    }
    updateDataInput(text,pin,length){
        const newData = {
            name: text,
            pin: pin,
            length: length};
        this.setState({data: newData})
    }
    updateAccounts(newAcc){
        this.setState({accounts: this.state.accounts.concat(newAcc)})
    }
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/generator' render={() => <Generator updateDataInput={(text,pin,length) =>  this.updateDataInput(text,pin,length)} data={this.state.data}/>} />
                    <Route path='/help' component={Help} />
                    <Route path='/info' component={Info} />
                    <Route path='/contactus' component={Contact} />
                    <Route path='/accounts' render={ () => <Accounts accounts={this.state.accounts} updateAccounts={(newAcc) => this.updateAccounts(newAcc)} />}/>
                    <Route path='/passwords' render={() => <Passwords accounts={this.state.accounts} data={this.state.data}/>}/>
                    <Redirect to='/home' />
                </Switch>
            </div>
        )
    }
}

export default Main;
 