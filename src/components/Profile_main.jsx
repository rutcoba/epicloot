import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink, Route } from 'react-router-dom';

class Profile_main extends React.Component {
  constructor(props){
      super(props);
      this.state = {
      }
  }
  
  componentDidMount(){
    window.scrollTo(0,0, 1000);
  }
  
  render() {
    return (
      <div className="" >
        <p>Основная вкладка</p>
      </div>                             
    )
  }
}

export default Profile_main;