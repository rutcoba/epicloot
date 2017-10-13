import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink, Route } from 'react-router-dom';

import Message from './Message';

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
    }
  
    render() {
      const item = this.props.data;
      const dificulty = item.dificulty;
      const reward = item.reward;
      let stars = [];
      for (let i = 0 ; i <= dificulty; i++){
        stars.push(<i key={i} className="material-icons star">star</i>);
      }
      return (
        <Link to={`/events_n_quests/${item.link}/${item.id}`}
         className={`quest__item ${this.props.className != undefined ? this.props.className : ''}`} >
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
          </div>
        </Link>
      )
    }
}

export default Quest_compact