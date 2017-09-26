import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink, Route } from 'react-router-dom';

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
    return (
      <div className="profile__page" >
       <div className="profile__block--main block--without-bg">
         <img src={this.state.data.avatar} alt="" className="profile__avatar"/>
         <p className="profile__name">{this.state.data.name}</p>
         <p className="profile__level">Уровень <span> {this.state.level} </span></p>
         <p className="profile__level">{this.state.needExp}</p>         
       </div>
       <div className="profile__block--moreinfo block--with-bg">
        </div>
      </div>                             
    )
  }
}

export default Profile