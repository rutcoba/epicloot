import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink, Route } from 'react-router-dom';

import quests from './../data/quests';
import sys_message from './../data/system_message';

class Quest_compact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          data: this.props.data,
          id_item: this.props.data.id,
          mess: ''
        }
        this.passQuest = this.passQuest.bind(this);
        this.confirmExecution = this.confirmExecution.bind(this);
    }
  
    activatePopup(messArray){
      this.setState({
        mess: messArray[(Math.floor(Math.random()*messArray.length))]
      });
      setTimeout( 
        ()=>{
          this.setState({
            mess: ''
          });
        }, 
        2000);
    }
    
    passQuest() {
      const passQuestMessArr = sys_message.filter(message => {
        return message.event == 'pass_quest';
      });
      this.activatePopup(passQuestMessArr);      
    }
  
    confirmExecution() {
      const confirmMessArr = sys_message.filter(message => {
        return message.event == 'confirm_execution';
      });
      this.activatePopup(confirmMessArr);
    }
  
    render() {
      const item = this.props.data;
      const dificulty = item.dificulty;
      const reward = item.reward;
      let render = '';
      let stars = [];
      for (let i = 0 ; i <= dificulty; i++){
        stars.push(<i key={i} className="material-icons star">star</i>);
      }
      let message = '';
      if(this.state.mess !== ''){
        message = <span className="popup popup--message">{this.state.mess.text}</span>
      } else {
        message = '';
      }
      let bodyQuest = 
      <div>
        <p className="quest__title">{item.title}</p>
          <p className="quest__author"><img className="quest__ava" src="/img/superman.png" alt=""/>{item.author}</p>
          <p className="quest__cat"><span>Категория: </span>{item.cat}</p>
          <p className="quest__cat"><span>Сложность: </span>{stars}</p>
          <div className="quest__reward">
            <span className="quest__reward--loot"><span>Предмет</span>{reward.loot}</span>
            <span className="quest__reward--money"><span>Деньги</span>{reward.money}</span>
            <span className="quest__reward--xp"><span>Опыт</span>{reward.xp}</span>
          </div>
      </div>;
      let takeBtn = <button className="btn btn--take_quest">Взять квест</button>;
      if(this.props.className == 'profile__quests'){
        takeBtn = 
          <button className="btn btn--take_quest" 
                  onClick={this.passQuest} 
                  disabled={this.state.mess !== '' ? true : false} 
          >
            Сдать
          </button>;
      } else if(this.props.className == 'profile__events') {
        takeBtn = 
          <button className="btn btn--take_quest" 
                  onClick={this.confirmExecution}
                  disabled={this.state.mess !== '' ? true : false}
          >
            Выполнен
          </button>;        
      }
      if(this.props.className != ''){
        render = <div className={`quest__item ${this.props.className}`} >
          {bodyQuest}
          {takeBtn}
          {message}
        </div>;
      } else {
        render = <Link to={`/events_n_quests/${item.link}/${item.id}`} 
         className={`quest__item ${this.props.className}`} >
          {bodyQuest}
          {takeBtn}
        </Link>;
      }
      return render
    }
}

export default Quest_compact