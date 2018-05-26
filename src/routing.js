import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import App from './App';
import Messages from './pages/messages';

class Routing extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/messages" component={Messages}/>
        <Route path="/toplist" exact component={App}/>
        <Redirect to="/toplist"/>
      </Switch>
    );

    return (
      <div>
        {routes}
      </div>
    );
  }
}

export default Routing;
