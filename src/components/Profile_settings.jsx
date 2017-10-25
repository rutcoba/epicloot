import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink, Route } from 'react-router-dom';

import Field_text from './Field_text';

class Profile_settings extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        name: '',
        avatar: '',
        about: '',
        email: '',
        phone: ''
      }
  }
  
  componentDidMount(){
    if(this.props.data.length !== 0){
      console.log(this.props.data);
      this.setState({
        name: this.props.data.name,
        avatar: this.props.data.avatar,
        about: this.props.data.about,
        email: this.props.data.contacts.email,
        phone: this.props.data.contacts.phone
      });
    }
    window.scrollTo(0,0, 1000);
  }
  
  render() {
    return (
      <form className="user__page" >
       <p>Настройки профиля</p>
        <div className={`card__panel profile__card `}>{/*инфо о пользователе*/}
         <div className="card__header">
          </div>
          <div className="card__content">
            <p className="profile__props">
              <Field_text type='text'
                        name='name'
                        placeholder='Имя'
                        autoFocus
                        value={this.state.name}
                        getVal={this.getVal} />
            </p>
          </div>
        </div>
      </form>
    )
  }
}

export default Profile_settings