import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink, Route } from 'react-router-dom';

import Quest_compact from './Quest_compact';

import quests from './../data/quests';

class Events_category extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render() {
      var idCat = this.props.match.params.link;
      var questsCat = Object.values(quests);
      var viewItem = [];
        return (
            <section id="events_category" className="inner-section">
              {questsCat.map((item, val) => {
                if( idCat == "all" ){
                  return(
                      <Quest_compact key={val} data={item} idCat="all"/>
                   )
                } else {
                  if( item.link == idCat ){
                    return(
                      <Quest_compact key={val} data={item} idCat={idCat}/>
                     )
                  } 
                }                                                  
               })}
           </section>            
        )
    }
}

export default Events_category