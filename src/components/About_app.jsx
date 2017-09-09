import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';

import About_user from './About_user';

import users from './../data/users';

class About_app extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
           <section id="about_app" className="screen-section"> 
                <h1 className="title--page">В кратце о приложении:</h1>
                <p className="main-text">В данном приложении Вы можете примерить на себе две роли:</p>                
                 <ul>
                   <li><Link className="main-text" to="/about_app/player">Игрок</Link></li>
                   <li><Link className="main-text" to="/about_app/npc">НИП</Link></li>
                 </ul>
                <div>
                  <Route path={`/about_app/:id`} component={About_user}/>
                  <Route exact path='/about_app/' component={About_user}/>
                </div>
           </section>            
        )
    }
}

export default About_app;