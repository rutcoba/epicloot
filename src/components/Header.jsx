import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleOpen(event) {
    this.setState({open:true});
  }
  handleClose(event) {
    this.setState({open:false});
  }
  
  render(){
    var btnClose, btnOpen;    
    if(window.innerWidth <= 1100){
      btnOpen = 
        <button className="btn btn--ghost toolbar__link" onClick={this.handleOpen}>
         <i className="material-icons">menu</i>
         <span>Меню</span>
        </button>
      btnClose = 
        <button className="btn btn--ghost btn--close" onClick={this.handleClose}>
         <i className="material-icons">close</i>
        </button> 
    }
    return (
      <header className={this.state.open == true ? 'open' : ''}>
       <div className="toolbar">
        <NavLink className="btn btn--ghost toolbar__link" to='/'>
         <i className="material-icons">home</i>
         <span>Домой</span>
        </NavLink>
        <NavLink className="btn btn--ghost toolbar__link" to="/events_n_quests">
         <i className="material-icons">new_releases</i>
         <span>Задания</span>
        </NavLink>
        <NavLink className="btn btn--ghost toolbar__link" to="/profile">
         <i className="material-icons">account_box</i>
         <span>Профиль</span>
        </NavLink>        
        {btnOpen}
        </div>
        <nav className={window.innerWidth <= 1100 ? 'mobile_nav' : 'desktop_nav'}>
          <ul className="menu">
            {btnClose}
            <li className="menu_item"><NavLink className="menu_link" to='/' onClick={this.handleClose}>Домой</NavLink></li>
            <li className="menu_item"><NavLink className="menu_link" to="/about_app" onClick={this.handleClose}>О приложении</NavLink></li>
            <li className="menu_item"><NavLink className="menu_link" to="/our_team" onClick={this.handleClose}>Наша команда</NavLink></li>
            <li className="menu_item"><NavLink className="menu_link" to="/contacts" onClick={this.handleClose}>Контакты</NavLink></li>
            <li className="menu_item"><NavLink className="menu_link" to="/events_n_quests" onClick={this.handleClose}>Квесты и лут</NavLink></li>
            <li className="menu_item"><NavLink className="menu_link" to="/users" onClick={this.handleClose}>Пользователи</NavLink></li>
          </ul>          
        </nav>
      </header>        
    )
  }    
} 

export default Header;