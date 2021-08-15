import React, { Component } from 'react';
import Home from './Home';
import Header from '../components/Header';
// import Login from '../components/Login';
import Login from './Login';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
// import { ACCOUNT_HOLDERS } from '../shared/accountHolders';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLogged: false
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          {/* <Route path="/home/:accountId" component={AccountWithId} /> */}
          <Route exact path='/contactus' component={Contact} />
          {/* <Redirect to="/" /> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;