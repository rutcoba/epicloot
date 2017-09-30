import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink } from 'react-router-dom';

class Sign_in extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
  
    componentDidMount(){}
  
    render() {
        return (
          <form className="form--sign_in">
           <label className="field-block">
            <input type="text" placeholder="Логин" autoComplete="off"/>
            </label>

           <label className="field-block">
            <input type="password" placeholder="Пароль" autoComplete="off"/>
            </label>
            <button className="btn btn--auth">Вход</button>              
            <p className="link--auth">Ещё нет аккаунта?<Link to='/auth/register'>Зарегистрируйся</Link></p>
          </form>
        )
    }
}

export default Sign_in;