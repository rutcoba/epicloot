import React from 'react';
import ReactDOM from 'react-dom';
import NavLink from 'react-router-dom';

class Sign_in extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
  
    componentDidMount(){}
  
    render() {
        return (
          <form className="form--sign_up">
           <label className="field-block">
            <input type="text" placeholder="Логин"/>
            </label>
           <label className="field-block">
            <input type="text" placeholder="Email"/>
            </label>
           <label className="field-block">
            <input type="password" placeholder="Пароль"/>
            </label>
           <label className="field-block">
            <input type="password" placeholder="Подтвердить пароль"/>
            </label>
            <button className="btn btn--auth">Создать аккаунт</button>
          </form>
        )
    }
}

export default Sign_in;