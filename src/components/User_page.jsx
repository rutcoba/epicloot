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
      <div className="quest__page" >
       <div className="quest__main--without-bg">
        <p className="quest__title">{item.title}</p>
        <p className="quest__author"><img className="quest__ava" src="/img/superman.png" alt=""/>{item.author}</p>          
        <div className="quest__reward">
          <span className="quest__reward--loot"><span>Предмет</span>{item.reward.loot}</span>
          <span className="quest__reward--money"><span>Деньги</span>{item.reward.money}</span>
          <span className="quest__reward--xp"><span>Опыт</span>{item.reward.xp}</span>
        </div>           
       </div>
       <div className="quest__main--with-bg">
        <p className="quest__cat"><span>Категория: </span>{item.cat}</p>
        <p className="quest__cat"><span>Сложность: </span>{stars}</p>
        <p className="quest__cat deadline"><span>Дата завершения: </span>28.09.2017</p>          
        <p className="quest__cat contacts"><span>Телефон: </span> +7 984 456 12 45</p>
        <p className="quest__cat status"><span>Статус задачи: </span> Выполняется</p>
        <div className="quest__description">
          <p>{item.description}</p>
        </div>
        <button className="btn btn--take_quest">Взять квест</button>
        </div>
      </div>                             
    )
  }
}

export default User_page