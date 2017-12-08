import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink, Route } from 'react-router-dom';

class User_page extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          data: this.props.data,
          id_item: this.props.data.id
      }
  }
  
  componentDidMount(){
    window.scrollTo(0,0, 1000);
  }
  
  render() {
    var item = this.props.data;
    var stars = [];
    for (let i = 0 ; i <= item.dificulty; i++){
      stars.push(<i key={i} className="material-icons star">star</i>);
    }
    return (
      <div className="user__page" >
       <div className="user__main--without-bg">         
       </div>
       <div className="user__main--with-bg">
        </div>
      </div>                             
    )
  }
}

export default User_page