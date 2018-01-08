import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink, Route } from 'react-router-dom';

import Message from './Message';
import Back_btn from './Back_btn';

import sys_message from './../data/system_message';

class Quest_full extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          data: this.props.data,
          id_item: this.props.data.id,
          load: false
      }
//      this.passQuest = this.passQuest.bind(this);
//      this.confirmExecution = this.confirmExecution.bind(this);
  }
  
  componentDidMount(){
    window.scrollTo(0,0, 1000);
      let obj = this;
      setTimeout(function(){
        obj.setState({load: true});
      },100);
  }
  
//    activatePopup(messArray){
//      this.setState({
//        mess: messArray[(Math.floor(Math.random()*messArray.length))]
//      });
//      setTimeout( () => {
//        this.setState({ mess: '' });
//      }, 2000);
//    }
    
//    passQuest() {
//      const passQuestMessArr = sys_message.filter(message => {
//        return message.event == 'pass_quest';
//      });
//      this.activatePopup(passQuestMessArr);      
//    }
//  
//    confirmExecution() {
//      const confirmMessArr = sys_message.filter(message => {
//        return message.event == 'confirm_execution';
//      });
//      this.activatePopup(confirmMessArr);
//    }
  
  render() {
    const item = this.props.data;
    let stars = [];
    for (let i = 0 ; i <= item.dificulty; i++){
      stars.push(<i key={i} className="material-icons star">star</i>);
    }   
    let pathnameArr = window.location.pathname.split('/'),
        btnText,
        click;
    switch(pathnameArr[1]){
      case 'profile_quests':
        btnText = 'Сдать';
        break;
      case 'profile_events':
        btnText = 'Выполнен';
        break;
      default:
        btnText = 'Взять квест';
        click = '';
        break;        
    }
    return (
      <div className={`page quest__page ${this.state.load ? 'load-inner_page' : ''}`} >
       <div className="quest__main block--without-bg">
         <Back_btn />
        <p className="quest__title">{item.title}</p>
        <p className="quest__author"><img className="quest__ava" src="/img/superman.png" alt=""/>{item.author}</p>          
        <div className="quest__reward">
          <span className="quest__reward--loot"><span>Предмет</span>{item.reward.loot}</span>
          <span className="quest__reward--money"><span>Деньги</span>{item.reward.money}</span>
          <span className="quest__reward--xp"><span>Опыт</span>{item.reward.xp}</span>
        </div>           
       </div>
       <div className="quest__main block--with-bg">
        <p className="quest__cat"><span>Категория: </span>{item.cat}</p>
        <p className="quest__cat"><span>Сложность: </span>{stars}</p>
        <p className="quest__cat deadline"><span>Дата завершения: </span>28.09.2017</p>          
        <p className="quest__cat contacts"><span>Телефон: </span> +7 984 456 12 45</p>
        <p className="quest__cat status"><span>Статус задачи: </span> Выполняется</p>
        <div className="quest__description">
          <p>{item.description}</p>
        </div>
        <button className="btn btn--take_quest">{btnText}</button>
        </div>
      </div>                             
    )
  }
}

export default Quest_full