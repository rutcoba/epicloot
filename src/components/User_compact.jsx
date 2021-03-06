import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink, Route } from 'react-router-dom';

import quests from './../data/quests';

class User_compact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data,
            id_item: this.props.data.id
        }
    }
    render() {
      var item = this.props.data;
      var stars = [];
      for (let i = 0 ; i <= item.dificulty; i++){
        stars.push(<i key={i} className="material-icons star">star</i>);
      }
      return (            
        <Link to={`/events_n_quests/${item.link}/${item.id}`} className="quest__item" >
          <p className="quest__title">{item.title}</p>
          <p className="quest__author"><img className="quest__ava" src="/img/superman.png" alt=""/>{item.author}</p>
          <p className="quest__cat"><span>Категория: </span>{item.cat}</p>
          <p className="quest__cat"><span>Сложность: </span>{stars}</p>
          <div className="quest__reward">
            <span className="quest__reward--loot"><span>Предмет</span>{item.reward.loot}</span>
            <span className="quest__reward--money"><span>Деньги</span>{item.reward.money}</span>
            <span className="quest__reward--xp"><span>Опыт</span>{item.reward.xp}</span>
          </div>
          <button className="btn btn--take_quest">Взять квест</button>
        </Link>                             
      )
    }
}

export default User_compact