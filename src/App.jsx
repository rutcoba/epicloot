import React from 'react';
import ReactDOM from 'react-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { withRouter, BrowserRouter, HashRouter, Redirect, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import About_app from './components/About_app';
import About_user from './components/About_user';
import Our_team from './components/Our_team';
import Contacts from './components/Contacts';
import Users from './components/Users';
import Events_n_quests from './components/Events_n_quests';
import Events_category from './components/Events_category';
import NotFound from './components/NotFound';

const App = ({location}) => {
//  const currentKey = location.pathname.split('/')[1] || '/'
  const timeout = { enter: 300, exit: 200 };
  return (
    <Layout>
      <TransitionGroup component="section" className="page-main">
        <CSSTransition timeout={timeout} classNames="fade" appear>
          <section className="page-main-inner">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about_app" component={About_app} />
              <Route path="/our_team" component={Our_team}/>
              <Route path="/contacts" component={Contacts}/>
              <Route path="/events_n_quests" component={Events_n_quests} />
              <Route path="/users" component={Users} />
              <Route path="*" component={NotFound}/>
            </Switch>
          </section>
      </CSSTransition>
    </TransitionGroup>
  </Layout>       
)}

export default withRouter(App);

ReactDOM.render(
  <BrowserRouter >
    <App />
  </BrowserRouter > , 
document.getElementById('root'));