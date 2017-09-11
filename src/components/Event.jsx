import React from 'react';
import ReactDOM from 'react-dom';

import Quest_full from './Quest_full';

import quests from './../data/quests';


class Event extends React.Component {
  constructor(props){
      super(props);
      this.state = {

      }
  }
  componentDidMount(){
  }
  render() {  
    var questsArr = Object.values(quests);  
    var item = this.props.data;
    var idItem = this.props.match.params.id; 
    console.log(questsArr);
      return (
        <div>
        {questsArr.map(item => {
          if( item.id == idItem ){
            return (
              <Quest_full key={item.id} data={item} />
            )  
          }        
        })}
        </div>
      )
  }
}

export default Event