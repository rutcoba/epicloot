import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserHistory, Link, NavLink, Route, Redirect } from 'react-router-dom';

import Profile_main from './Profile_main';
import Profile_settings from './Profile_settings';
import Profile_quests from './Profile_quests';
import Profile_events from './Profile_events';
import Level from './Level';

import users from './../data/users'; 

class Profile extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        data: [],
        level: 1,
        needExp: 0,
        header: ''
      }
      this.logOut = this.logOut.bind(this);
  }
  
  componentDidMount(){
    window.scrollTo(0,0, 1000);    
    let data = {};
    if(sessionStorage.getItem('id') !== undefined && sessionStorage.getItem('id') !== ''){
      users.map(item => {
        if(item.id == sessionStorage.getItem('id')){
          data = item;
        }      
      });
    }
    this.setState({data});
  }
  logOut() {
    sessionStorage.setItem('id', '');
  }
  render() {
    let redirect = '',
        header = '',
        render = '';
    const obj = this;
    if(this.props.location.pathname == '/personal'){ 
      redirect = <Redirect from='/personal' to='/personal/main' />;
    }
    if(this.props.location.pathname == '/personal/main'){ 
       header = 'full';
    }
    if(sessionStorage.getItem('id') == ''){
      redirect = <Redirect to='/auth' />;
    } else {
      redirect = '';
      render = <div className={`profile__block--main block--without-bg ${header}`}>
          <div className="profile__header">
              <Link to={`/auth`} className="profile__logout" onClick={this.logOut}>
                <i className="material-icons">exit_to_app</i>
              </Link>
              <Link to={`/personal/settings`} className="profile__link-settings">
                <i className="material-icons">settings</i>
              </Link>
             <div className="profile__avatar">
              <img src={this.state.data.avatar} alt=""/>
            </div>
            <p className="profile__name">{this.state.data.name}</p>
            <Level data={this.state.data.exp}/>
          </div>
          <div className="profile__tabs">
              <NavLink to={`/personal/main`} className="profile__tab-link" activeClassName="active">Профиль</NavLink>
              <NavLink to={`/personal/quests`} className="profile__tab-link" activeClassName="active">Квесты</NavLink>
              <NavLink to={`/personal/events`} className="profile__tab-link" activeClassName="active">Задания</NavLink>
          </div>
        </div>
    }
    const Main = function(props) {
        return (<Profile_main {...props} data={obj.state.data} />);
    };
    const Setting = function(props) {
        return (<Profile_settings {...props} data={obj.state.data} />);
    };
    const Quests = function(props) {
        return (<Profile_quests {...props} quests={obj.state.data.quests} />);
    };
    const Events = function(props) {
        return (<Profile_events {...props} quests={obj.state.data.quests} />);
    };
    return (
      <div className={`page profile__page`} >
        {render}        
        <div className='profile__block--moreinfo block--with-bg'>
          {redirect}
          <Route exact path={`/personal/main`} component={Main}/>
          <Route exact path={`/personal/settings`} component={Setting}/>
          <Route exact path={`/personal/quests`} component={Quests}/>
          <Route exact path={`/personal/events`} component={Events}/>
        </div>
      </div>                             
    )
  }
}

export default Profile