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
      console.log(this.state.open);
  }
  handleClose(event) {
    this.setState({open:false});
      console.log(this.state.open);
  }
  
  render(){
    console.log('width window: ' + window.innerWidth); 
    var btnClose, btnOpen;    
    if(window.innerWidth <= 1100){
      btnOpen = 
        <button className="btn btn--ghost" onClick={this.handleOpen}>
         <i className="material-icons">menu</i>
        </button>
      btnClose = 
        <button className="btn btn--ghost btn--close" onClick={this.handleClose}>
         <i className="material-icons">close</i>
        </button> 
    }
    return (
      <header className={this.state.open == true ? 'open' : ''}>
         {btnOpen}
        <nav className={window.innerWidth <= 1100 ? 'mobile_nav' : 'desktop_nav'}>
          <ul className="menu">
            {btnClose}
            <li className="menu_item"><NavLink className="menu_link" to='/' onClick={this.handleClose}>Home</NavLink></li>
            <li className="menu_item"><NavLink className="menu_link" to="/about_app" onClick={this.handleClose}>about_app</NavLink></li>
            <li className="menu_item"><NavLink className="menu_link" to="/our_team" onClick={this.handleClose}>our_team</NavLink></li>
            <li className="menu_item"><NavLink className="menu_link" to="/contacts" onClick={this.handleClose}>contacts</NavLink></li>
            <li className="menu_item"><NavLink className="menu_link" to="/events_n_quests" onClick={this.handleClose}>events_n_quests</NavLink></li>
          </ul>          
        </nav>
      </header>        
    )
  }    
} 

export default Header;