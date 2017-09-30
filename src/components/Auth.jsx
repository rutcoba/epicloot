import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink, Switch, Route } from 'react-router-dom';

import Sign_in from './Sign_in';
import Sign_up from './Sign_up';

class Auth extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          load: 0
        }
    }
  
    componentDidMount(){
      let obj = this;
      setTimeout(function(){
        obj.setState({load: 1});
      },100);
    }
  
    render() {
      let switcher = '';
      if (window.location.pathname === '/auth'){
          switcher = 
               <ul className="switch--auth">
                <li><Link to="/auth/login" className="btn btn--auth-switch">Вход</Link></li>
                <li><Link to="/auth/register" className="btn btn--auth-switch">Регистрация</Link></li>
              </ul>
      }
      
        return (
         <section id="auth_page" 
                  className={`screen-section ${this.state.load === 1 ? 'load-component' : ''}`}>
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