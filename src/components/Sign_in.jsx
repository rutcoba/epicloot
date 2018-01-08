import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink } from 'react-router-dom';

import Message from './Message';
import Field_text from './Field_text';

import sys_message from './../data/system_message';
import users from './../data/users';

class Sign_in extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          auth: {
            pass: '',
            login: ''
          },
          mess: ''
        }
        this.handleAuth = this.handleAuth.bind(this);
        this.getVal = this.getVal.bind(this);
    }  
    componentDidMount(){} 
  
    getVal(nameField, val){
      console.log(nameField, val);
      let auth = this.state.auth;
      if(nameField == 'login') {
        auth.login = val;       
      } else if (nameField == 'pass'){
        auth.pass = val;
      }
      this.setState({ auth });
    }
  
    handleAuth(e){
      e.preventDefault();
      let obj = this;
      let auth = this.state.auth;
      obj.setState({
        mess: 'auth_error'
      });
      users.map(user => {
        if(user.login == auth.login && 
           user.pass == auth.pass)
        {
          sessionStorage.setItem('id', user.id);
          obj.setState({
            mess: 'auth'
          });
          setTimeout( 
            ()=>{
              window.location = '/personal/main';
            }, 
            1000);
        }
      });
      setTimeout( 
        ()=>{
          this.setState({
            mess: ''
          });
        }, 
        2000);
    }
  
    render() {
      const { mess, auth } = this.state;
      let message = '';
      if(mess !== ''){
        message = <Message mess={mess} className={mess =='auth' ? 'popup--auth' : ''} />
      } else {
        message = '';
      }
        return (
          <form className="form--sign_in" autoComplete="off">
            <Field_text className='auth__field field--with_ico'
                        ico='account_circle'
                        type='text'
                        name='login'
                        placeholder='Логин'
                        autoFocus
                        value={auth.login}
                        getVal={this.getVal} />
            <Field_text className='auth__field field--with_ico'
                        ico='lock'
                        type='password'
                        name='pass'                        
                        placeholder='Пароль'
                        autoComplete="new-password"
                        value={auth.pass}
                        getVal={this.getVal} />
            <button className={`btn btn--auth ${ mess == 'auth' ? 'load' : '' }`} 
                    onClick={this.handleAuth} 
                    disabled={ mess !== '' ? true : false }>
              { mess !== '' ? <div className="loader"><s></s><s></s><s></s></div> : 'Вход'}
            </button>              
            <p className="link--auth">Ещё нет аккаунта?<Link to='/auth/register'>Зарегистрируйся</Link></p>
            {message}
          </form>
        )
    }
}

export default Sign_in;