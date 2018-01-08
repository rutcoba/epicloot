import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink, Switch, Route } from 'react-router-dom';

import Sign_in from './Sign_in';
import Sign_up from './Sign_up';

import sys_message from './../data/system_message';

class Auth extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          load: false
        }
    }
  
    componentDidMount(){
      let obj = this;
      setTimeout(function(){
        obj.setState({load: true});
      },100);
    }
  
    render() {
      let switcher = '';
      if (window.location.pathname === '/auth'){
          switcher = 
               <ul className="switch--auth">
                <li><Link to="/auth/login" className="btn btn--auth-switch"><i className="material-icons">input</i>Вход</Link></li>
                <li><Link to="/auth/register" className="btn btn--auth-switch"><i className="material-icons">perm_identity</i>Регистрация</Link></li>
              </ul>
      }
      
        return (
         <section id="auth_page" 
                  className={`screen-section ${this.state.load ? 'load-component' : ''}`}>
            <div className={`start-page ${window.location.pathname === '/auth' ? '' : 'with-form'}`}>
             <div className={`logo`}>
              <p className="welcome_text">Ep<span>i</span>cL<span>oo</span>t</p>
            </div>
            {switcher}
            </div>
            <div className="form--wrapper">
            <Route exact path="/auth/login" component={Sign_in} />
            <Route exact path="/auth/register" component={Sign_up}/>
            </div>
         </section>
        )
    }
}

export default Auth;