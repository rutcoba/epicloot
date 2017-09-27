import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink, Route } from 'react-router-dom';

class Profile_main extends React.Component {
  constructor(props){
      super(props);
      this.state = {
      }
  }
  
  componentDidMount(){
    window.scrollTo(0,0, 1000);
  }
  
  render() {
    return (
      <ul className="profile__tab profile__tab--main" >
        <li className="card__panel profile__card">
         <div className="card__header">
          <i className="material-icons card__ico">person</i>
          </div>
        </li>
        <li className="card__panel profile__card">          
         <div className="card__header">
         <i className="material-icons card__ico">contacts</i>
          </div>
        </li>
        <li className="card__panel profile__card">          
         <div className="card__header">
         <i className="material-icons card__ico">style</i>
          </div>
        </li>
        <li className="card__panel profile__card">          
         <div className="card__header">
         <i className="material-icons card__ico">assessment</i>
          </div>
        </li>
        <li className="card__panel profile__card">          
         <div className="card__header">
         <i className="material-icons card__ico">star</i>
          </div>
        </li>
      </ul>                             
    )
  }
}

export default Profile_main;