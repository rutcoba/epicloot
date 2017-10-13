import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink } from 'react-router-dom';

import Message from './Message';

import sys_message from './../data/system_message';
import users from './../data/users';

class Sign_in extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          val: '',
          pass: '',
          mess: ''
        }
        this.handleAuth = this.handleAuth.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.changePass = this.changePass.bind(this);
    }
  
    componentDidMount(){}
  
    changeValue(){
      this.setState({ val: ReactDOM.findDOMNode(this.refs.text).value });
    }
  
    changePass(){
      this.setState({ pass: ReactDOM.findDOMNode(this.refs.pass).value });
    }
  
  
    
    handleAuth(e){
      e.preventDefault();
      let obj = this;
      let auth = {
        login: obj.state.val,
        pass: obj.state.pass
      }
      const authMessArr = sys_message.filter(message => {
        return message.event == 'auth';
      });
      const authErrArr = sys_message.filter(message => {
        return message.event == 'auth_error';
      });
      obj.setState({
        mess: authErrArr[(Math.floor(Math.random()*authErrArr.length))]
      });
      users.map(user => {
        if(user.login == auth.login && 
           user.pass == auth.pass)
        {
          sessionStorage.setItem('id', user.id);
          obj.setState({
            mess: authMessArr[(Math.floor(Math.random()*authMessArr.length))]
          });
          setTimeout( 
            ()=>{
              window.location = '/personal/main';
            }, 
            2000);
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
//      if(this.state.mess !== ''){
//        message = <Message mess={this.state.mess} />
//      } else {
//        message = '';
//      }
        return (
          <form className="form--sign_in" autoComplete="off">
           <label className="field-block">
           <i className="material-icons">account_circle</i>
            <input type="text" name="login" placeholder="Логин" autoComplete="off" autoFocus ref='text' value={this.state.val} onChange={this.changeValue}/>
            </label>

           <label className="field-block">
           <i className="material-icons">lock</i>
            <input type="password" name="pass" placeholder="Пароль" autoComplete="new-password" ref='pass' value={this.state.pass} onChange={this.changePass} />
            </label>
            <button className="btn btn--auth" onClick={this.handleAuth} disabled={this.state.mess !== '' ? true : false}>{this.state.mess !== '' ? 'load' : 'Вход'}</button>              
            <p className="link--auth">Ещё нет аккаунта?<Link to='/auth/register'>Зарегистрируйся</Link></p>
            {message}
          </form>
        )
    }
}

export default Sign_in;