import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Redirect, Switch, Route } from 'react-router-dom';

import Home from './Home';
import About_app from './About_app';
import Our_team from './Our_team';
import Contacts from './Contacts';
import Events_n_quests from './Events_n_quests';
import Events_category from './Events_category';
import NotFound from './NotFound';

const MainRouter = () => (
    <main>
     <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about_app" component={About_app}/>
      <Route path="/our_team" component={Our_team}/>
      <Route path="/contacts" component={Contacts}/>
      <Route path="/events_n_quests" component={Events_n_quests} />
      <Route path="*" component={NotFound}/>
    </Switch>
  </main>       
)

export default MainRouter;