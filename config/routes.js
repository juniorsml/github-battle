import React from 'react'
import {Router , Route, hashHistory , IndexRoute , browserHistory} from 'react-router'
import Main from '../components/Main.js'
import Home from '../components/Home.js'
import PromptContainer from '../containers/PromptContainer.js'
import LifeCycle from '../components/LifeCycle.js'
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer.js'


var routes = (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute  component={Home}/>
        <Route path="/playerOne" header="Player One" component={PromptContainer}/>
        <Route path="/playerTwo/:playerOne" header="Player Two" component={PromptContainer}/>
        <Route path="/battle"  component={ConfirmBattleContainer}/>
      </Route>
      <Route path="/lifeCycle"  component={LifeCycle}/>
    </Router>
) ;


module.exports = routes;
