import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter, BrowserRouter, HashRouter, Redirect, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Auth from './components/Auth';
import Home from './components/Home';
import About_app from './components/About_app';
import About_user from './components/About_user';
import Our_team from './components/Our_team';
import Contacts from './components/Contacts';
import Users from './components/Users';
import Profile from './components/Profile';
import Events_n_quests from './components/Events_n_quests';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/auth" component={Auth}/>
        <Route path="/about_app" component={About_app} />
        <Route path="/our_team" component={Our_team}/>
        <Route path="/contacts" component={Contacts}/>
        <Route path="/events_n_quests" component={Events_n_quests} />
        <Route path="/users" component={Users} />
        <Route path="/personal" component={Profile} />
        <Route path="*" component={NotFound}/>
      </Switch>
  </Layout>       
)}

export default withRouter(App);

ReactDOM.render(
  <BrowserRouter >
    <App />
  </BrowserRouter > , 
document.getElementById('root'));