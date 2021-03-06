import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink, Route } from 'react-router-dom';

import Level from './Level';

import category from './../data/category';

class Profile_main extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        data: this.props.data
      }
  }
  
  componentDidMount(){
    window.scrollTo(0,0, 1000);
  }
  
  render() {
    const user = this.state.data;
    let render = <p>Загрузка</p>;
    let skillsArray = [];
    let visible = '';
    if(user.length !== 0){      
        {category.map((cat, val) => {
          {user.skills.map((item) => {
            if(item.idCat == cat.id){
              skillsArray.push(
                <div key={val} id={cat.id}>
                  <p className="main_text category__name">{cat.cat}: </p>
                  <Level data={item.exp} className='profile__level--skill'/>
                </div>
              );
            }
          })}
        })}
        render = <ul className={`profile__tab profile__tab--main`} >
          <li className={`card__panel profile__card `}>{/*инфо о пользователе*/}
           <div className="card__header">
            <i className="material-icons card__ico">person</i>
            </div>
            <div className="card__content">
              <p className="profile__props"><span>О себе</span>{user.about}</p>
            </div>
          </li>
          <li className={`card__panel profile__card `}>{/*контакты*/}
           <div className="card__header">
           <i className="material-icons card__ico">contacts</i>
            </div>
            <div className="card__content">
              <p className="profile__props"><span>Email: </span>{user.contacts.email}</p>
              <p className="profile__props"><span>Телефон: </span>{user.contacts.phone}</p>
              <div className="profile__props">
              <span>Профили в социальных сетях: </span>
              {user.contacts.social.map((item, val) => {
                  return <p key={val}>{item}</p>
                })}
              </div>
            </div>
          </li>
          <li className={`card__panel profile__card `}>{/*скилы*/}          
           <div className="card__header">
           <i className="material-icons card__ico">style</i>
            </div>
            <div className="card__content">
              {skillsArray}
            </div>
          </li>
          <li className={`card__panel profile__card `}>{/*статистика*/}          
           <div className="card__header">
           <i className="material-icons card__ico">assessment</i>
            </div>
            <div className="card__content">
              <p>{user.about}</p>
            </div>
          </li>
          <li className={`card__panel profile__card `}>{/*оценка пользователей*/}
           <div className="card__header">
           <i className="material-icons card__ico">star</i>
            </div>
            <div className="card__content">
              <p>{user.about}</p>
            </div>
          </li>
        </ul>    
    }
    return render
  }
}

export default Profile_main;