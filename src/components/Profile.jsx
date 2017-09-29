import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink, Route, Redirect } from 'react-router-dom';

import Profile_main from './Profile_main';
import Profile_settings from './Profile_settings';
import Profile_quests from './Profile_quests';
import Profile_events from './Profile_events';

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
  }
  
  componentDidMount(){
    window.scrollTo(0,0, 1000);    
    let data = {};    
    users.map(item => {
      if(item.id == '1'){
        data = item;
      }      
    });
    let level = Math.floor(data.exp/1000);
    let needExp = data.exp%1000;
    this.setState({data,
                   level,
                   needExp});
  }
  
  render() {
    let redirect = '';
    let header = '';
    const obj = this;
    if(this.props.location.pathname == '/personal'){ 
      redirect = <Redirect from='/personal' to='/personal/main' />;
    }
    if(this.props.location.pathname == '/personal/main'){ 
       header = 'full';
    }
    const Main = function(props) {
        return (<Profile_main {...props} load='0' data={obj.state.data} />);
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
        <div className={`profile__block--main block--without-bg ${header}`}>
          <div className="profile__header">
              <Link to={`/personal/settings`} className="profile__link-settings">
                <i className="material-icons">settings</i>
              </Link>
             <div className="profile__avatar">
              <img src={this.state.data.avatar} alt=""/>
            </div>
            <p className="profile__name">{this.state.data.name}</p>
            <p className="profile__level">Уровень <span> {this.state.level} </span></p>
            <p className="profile__level">{this.state.needExp}</p>
          </div>
          <ul className="profile__tabs">
            <li className="profile__tab-link active">
              <Link to={`/personal/main`}>Профиль</Link>
            </li>
            <li className="profile__tab-link" >
              <Link to={`/personal/quests`}>Квесты</Link>
            </li>
            <li className="profile__tab-link">
              <Link to={`/personal/events`}>Задания</Link>
            </li>
          </ul>
        </div>
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