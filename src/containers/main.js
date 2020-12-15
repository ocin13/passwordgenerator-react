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
import {ANSWERS} from '../shared/answers';
import Answer from '../component/answer';
import Blog from '../containers/blog';
import {ARTICLES} from '../shared/Articles';
import {COMMENTS} from '../shared/Comments';
import BlogInfo from '../component/bloginfo';
import Footer from '../component/footer';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: DATA,
            accounts: ACCOUNTS,
            answers: ANSWERS,
            articles: ARTICLES,
            comments: COMMENTS
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
        const answerInfo = ({match}) => {
            return(
                <Answer answer={this.state.answers.filter(answer => answer.id === +match.params.answerId)[0]} answers={this.state.answers}/>
            );
        };

        const blogInfo = ({match}) => {
            return(
                <BlogInfo article={this.state.articles.filter(article => article.id === +match.params.blogId)[0]} />
            );
        }

        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition  classNames="page" timeout={300}>
                        <Switch>
                            <Route path='/home' component={Home} />
                            <Route path='/generator' render={() => <Generator updateDataInput={(text,pin,length) =>  this.updateDataInput(text,pin,length)} data={this.state.data}/>} />
                            <Route path='/help' component={Help} />
                            <Route path='/info/:answerId' component={answerInfo} />
                            <Route path='/info' component={Info} />
                            <Route path='/blog/:blogId' component={blogInfo} />
                            <Route path='/blog' render={() => <Blog articles={this.state.articles} comments={this.state.comments}/>} />
                            <Route path='/contactus' component={Contact} />
                            <Route path='/accounts' render={ () => <Accounts accounts={this.state.accounts} updateAccounts={(newAcc) => this.updateAccounts(newAcc)} />}/>
                            <Route path='/passwords' render={() => <Passwords accounts={this.state.accounts} data={this.state.data}/>}/>
                            <Redirect to='/home' />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer/>
                
            </div>
        )
    }
}

export default Main;
 