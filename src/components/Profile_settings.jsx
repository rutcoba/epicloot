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
      this.getVal = this.getVal.bind(this);
  }
  
  componentDidMount(){
    if(this.props.data.length !== 0){
      this.setState({
        name: this.props.data.name,
        login: this.props.data.login,        
        pass: this.props.data.pass,
        avatar: this.props.data.avatar,
        about: this.props.data.about,
        email: this.props.data.contacts.email,
        phone: this.props.data.contacts.phone
      });
    }
    window.scrollTo(0,0, 1000);
  } 
  
  getVal(nameField, val){
    switch(nameField){
      case 'name': 
        this.setState({ name : val });
        break;
      case 'pass': 
        this.setState({ pass : val });
        break;
      case 'avatar': 
        this.setState({ avatar : val });
        break;
      case 'about': 
        this.setState({ about : val });
        break;
      case 'email': 
        this.setState({ email : val });
        break;
      case 'phone': 
        this.setState({ phone : val });
        break;
    }
  }
  
  render() {
    return (
      <form className="user__page" >
      <div className="setiings__block">
       <p>Настройки личной информации</p>
        <div className={`card__panel profile__card `}>{/*инфо о пользователе*/}
         <div className="card__header">
          </div>
          <div className="card__content">
            <p className="profile__props">
             <span>Аватар</span>
              <Field_text type='file'
                        name='avatar'
                        value={this.state.avatar}
                        getVal={this.getVal} />
             <span>Имя</span>
              <Field_text type='text'
                        name='name'
                        placeholder='Имя'
                        value={this.state.name}
                        getVal={this.getVal} />
             <span>О себе</span>
              <Field_text type='textarea'
                        name='about'
                        placeholder='О себе'
                        value={this.state.about}
                        getVal={this.getVal} />
            </p>
          </div>
        </div>
      </div>
      <div className="setiings__block">
       <p>Настройки аккаунта</p>
        <div className={`card__panel profile__card `}>{/*инфо о пользователе*/}
         <div className="card__header">
          </div>
          <div className="card__content">
            <p className="profile__props">
             <span>Логин</span>
              <Field_text type='text'
                        name='login'
                        placeholder='Логин'
                        value={this.state.login}
                        getVal={this.getVal} />
             <span>Введите старый пароль</span>
              <Field_text type='pass'
                        name='pass'
                        placeholder='Пароль'
                        value={this.state.pass}
                        getVal={this.getVal} />
             <span>Смена пароля</span>
              <Field_text type='pass'
                        name='pass'
                        placeholder='Пароль'
                        value={this.state.pass}
                        getVal={this.getVal} />
            </p>
          </div>
        </div>
      </div>
      <div className="setiings__block">
       <p>Настройки контактов</p>
        <div className={`card__panel profile__card `}>{/*инфо о пользователе*/}
         <div className="card__header">
          </div>
          <div className="card__content">
            <p className="profile__props">
             <span>Электронная почта</span>
              <Field_text type='text'
                        name='email'
                        placeholder='Почта'
                        value={this.state.email}
                        getVal={this.getVal} />
             <span>Телефон</span>
              <Field_text type='text'
                        name='phone'
                        placeholder='Телефон'
                        value={this.state.phone}
                        getVal={this.getVal} />
            </p>
          </div>
        </div>
      </div>      
      </form>
    )
  }
}

export default Profile_settings