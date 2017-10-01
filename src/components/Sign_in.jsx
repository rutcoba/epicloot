import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink } from 'react-router-dom';

import users from './../data/users';

class Sign_in extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          val: '',
          pass: ''
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
      let obj = this;
      e.preventDefault();
      let auth = {
        login: obj.state.val,
        pass: obj.state.pass
      }
      users.map(user => {
        if(user.login == auth.login && user.pass == auth.pass){
          sessionStorage.setItem('id', user.id);
          window.location = '/personal';          
        } else {          
          console.log('неправильные логин или пароль');
        }
      });
    }
  
    render() {
        return (
          <form className="form--sign_in">
           <label className="field-block">
            <input type="text" placeholder="Логин" autoComplete="on" ref='text' value={this.state.val} onChange={this.changeValue}/>
            </label>

           <label className="field-block">
            <input type="password" placeholder="Пароль" autoComplete="on" ref='pass' value={this.state.pass} onChange={this.changePass}/>
            </label>
            <button className="btn btn--auth" onClick={this.handleAuth}>Вход</button>              
            <p className="link--auth">Ещё нет аккаунта?<Link to='/auth/register'>Зарегистрируйся</Link></p>
          </form>
        )
    }
}

export default Sign_in;