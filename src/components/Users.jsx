import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink, Route } from 'react-router-dom';

import User_compact from './User_compact';

import quests from './../data/quests';

class Users extends React.Component {
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
      console.log(this.props);
      var idCat = this.props.match.params.link;
      var questsCat = Object.values(quests);
      var viewItem = [];
        return (
            <section id="events_category"
              className={`screen-section ${this.state.load === 1 ? 'load-component' : ''}`}>
              {questsCat.map((item, val) => {
                if( idCat == "all" ){
                  return(
                      <User_compact key={val} data={item} idCat="all"/>
                   )
                } else {
                  if( item.link == idCat ){
                    return(
                      <User_compact key={val} data={item} idCat={idCat}/>                        
                     )
                  } 
                }                                                  
               })}
           </section>            
        )
    }
}

export default Users