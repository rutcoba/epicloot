import React from 'react';
import ReactDOM from 'react-dom';

class Auth extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          load: 0
        }
    }
  
    componentDidMount(){
      let obj = this;
      setTimeout(function(){
        obj.setState({load: 1});
      },100);
    }
  
    render() {
        return (
         <section id="auth_page" 
                  className={`screen-section ${this.state.load === 1 ? 'load-component' : ''}`}>
            <div className="logo"><p className="welcome_text">Ep<span>i</span>cL<span>oo</span>t</p></div>
            <form className="form--auth">
             <label className="field-block">
              <input type="text" placeholder="Логин"/>
              </label>
              
             <label className="field-block">
              <input type="password" placeholder="Пароль"/>
              </label>
              <button className="btn btn--auth">Вход</button>
            </form>
            <p>Ещё нет аккаунта? Регистрируйся</p>
         </section>
        )
    }
}

export default Auth;