import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink, Route } from 'react-router-dom';

import Quest_compact from './Quest_compact';

import quests from './../data/quests';

class Profile_events extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        quests: this.props.quests
      }
  }
  
  componentDidMount(){
    window.scrollTo(0,0, 1000);
  }
  
  render() {
    const questsArr = this.state.quests;
    let dataArray = [];
    let render = <p>Загрузка</p>;
    if(questsArr !== undefined){
      quests.map(quest => {        
        questsArr.create.map((item, val) => {
          if(item == quest.id){
            dataArray.push(<Quest_compact key={val} forProfile data={quest}/>)
          }
        })
      })
    }
    return (
      <div className="user__page" >       
        {dataArray}
      </div>                             
    )
  }
}

export default Profile_events;