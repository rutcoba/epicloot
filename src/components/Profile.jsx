import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink, Route, Redirect } from 'react-router-dom';

import Profile_main from './Profile_main';
import Profile_settings from './Profile_settings';
import Profile_quests from './Profile_quests';

import users from './../data/users'; 

class Profile extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        data: [],
        level: 1,
        needExp: 0
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
    if(this.props.location.pathname == '/personal'){ 
      redirect = <Redirect from='/personal' to='/personal/main' />;
    }
    return (
      <div className="profile__page" >
        <div className="profile__block--main block--without-bg">
           <div className="profile__avatar">
            <img src={this.state.data.avatar} alt=""/>            
            <li className="profile__link-settings">
              <Link to={`/personal/settings`}><i className="material-icons">settings</i></Link>
            </li>
          </div>
          <p className="profile__name">{this.state.data.name}</p>
          <p className="profile__level">Уровень <span> {this.state.level} </span></p>
          <p className="profile__level">{this.state.needExp}</p>
          <ul className="profile__tabs">
            <li className="profile__tab-link active">
              <Link to={`/personal/main`}>Профиль</Link>
            </li>
            <li className="profile__tab-link">
              <Link to={`/personal/quests`}>Квесты</Link>
            </li>
            <li className="profile__tab-link">
              <Link to={`/personal/quests`}>Задания</Link>
            </li>
          </ul>
        </div>
        <div className="profile__block--moreinfo block--with-bg">
          {redirect}
          <Route exact path={`/personal/main`} component={Profile_main}/>
          <Route exact path={`/personal/settings`} component={Profile_settings}/>
          <Route exact path={`/personal/quests`} component={Profile_quests}/>
        </div>
      </div>                             
    )
  }
}

export default Profile