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
          login: '',
          pass: '',
          mess: ''
        }
        this.handleAuth = this.handleAuth.bind(this);
        this.getVal = this.getVal.bind(this);
    }  
    componentDidMount(){} 
  
    getVal(nameField, val){
      if(nameField == 'login') {
        this.setState({ login : val });        
      } else if (nameField == 'pass'){
        this.setState({ pass : val });
      }
    }
  
    handleAuth(e){
      e.preventDefault();
      let obj = this;
      let auth = {
        login: obj.state.login,
        pass: obj.state.pass
      }
      console.log(auth);
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
      let message = '';
      if(this.state.mess !== ''){
        message = <Message mess={this.state.mess} className="popup--auth" />
      } else {
        message = '';
      }
        return (
          <form className="form--sign_in" autoComplete="off">
            {/*<label className="field-block">
           <i className="material-icons">account_circle</i>
            <input type="text" name="login" placeholder="Логин" autoComplete="off" autoFocus ref='text' value={this.state.val} onChange={this.changeValue}/>
            </label>*/}
            <Field_text className='auth__field field--with_ico'
                        ico='account_circle'
                        type='text'
                        name='login'
                        placeholder='Логин'
                        autoFocus
                        value={this.state.login}
                        getVal={this.getVal} />
            <Field_text className='auth__field field--with_ico'
                        ico='lock'
                        type='password'
                        name='pass'                        
                        placeholder='Пароль'
                        autoComplete="new-password"
                        value={this.state.pass}
                        getVal={this.getVal} />
          
            {/*<label className="field-block">
           <i className="material-icons">lock</i>
            <input type="password" name="pass" placeholder="Пароль" autoComplete="new-password" ref='pass' value={this.state.pass} onChange={this.changePass} />
            </label>*/}
            <button className={`btn btn--auth ${this.state.mess !== '' ? 'load' : ''}`} onClick={this.handleAuth} disabled={this.state.mess !== '' ? true : false}>{this.state.mess !== '' ? 'load' : 'Вход'}</button>              
            <p className="link--auth">Ещё нет аккаунта?<Link to='/auth/register'>Зарегистрируйся</Link></p>
            {message}
          </form>
        )
    }
}

export default Sign_in;