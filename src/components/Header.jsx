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
    this.state.open == false ?      
      this.setState({open:true}) :    
      this.setState({open:false});
  }
  handleClose(event) {
    this.setState({open:false});
  }
  
  render(){
    let btnClose, btnOpen, toolbar = '';    
    if(window.innerWidth <= 1100){
      btnOpen = 
        <button className="btn btn--ghost toolbar__link" onClick={this.handleOpen}>
         <i className="material-icons">{this.state.open ? 'close' : 'menu'}</i>
         <span>Меню</span>
        </button>
      btnClose = 
        <button className="btn btn--ghost btn--close" onClick={this.handleClose}>
         <i className="material-icons">close</i>
        </button> 
    }
    if(window.location.pathname.split('/')[1] !== 'auth'){
      toolbar = <div className="toolbar">
        <NavLink className="btn btn--ghost toolbar__link" exact to='/' activeClassName="active" onClick={this.handleClose}>
         <i className="material-icons">home</i>
         <span>Домой</span>
        </NavLink>
        <NavLink className="btn btn--ghost toolbar__link" to="/events_n_quests" activeClassName="active" onClick={this.handleClose}>
         <i className="material-icons">new_releases</i>
         <span>Задания</span>
        </NavLink>
        <NavLink className="btn btn--ghost toolbar__link" to="/personal/main" activeClassName="active" onClick={this.handleClose}>
         <i className="material-icons">account_box</i>
         <span>Профиль</span>
        </NavLink>        
        {btnOpen}
        </div>
    }
    return (
      <header className={this.state.open == true ? 'open' : ''}>
         {toolbar}
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