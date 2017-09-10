import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink, Route } from 'react-router-dom';

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
                if( idCat == "all"){
                  return(
                      <Link key={val} to={`/events_n_quests/${item.link}/${item.id}`} className="quest__item">
                        <p className="quest__title">{item.title}</p>
                        <p className="quest__author"><img className="quest__ava" src="/img/superman.png" alt=""/>{item.author}</p>
                        <p className="quest__cat"><span>Категория: </span>{item.cat}</p>
                        <p className="quest__cat"><span>Сложность: </span>{item.dificulty}</p>
                        <div className="quest__reward">
                          <span className="quest__reward--loot"><span>Предмет</span>{item.reward.loot}</span>
                          <span className="quest__reward--money"><span>Деньги</span>{item.reward.money}</span>
                          <span className="quest__reward--xp"><span>Опыт</span>{item.reward.xp}</span>
                        </div>
                      </Link>
                   )
                } else {
                  if(item.link == idCat){
                    return(
                        <Link key={val} to={`/events_n_quests/${item.link}/${item.id}`} className="quest__item">
                          <p className="quest__title">{item.title}</p>
                          <p className="quest__author"><img className="quest__ava" src="/img/superman.png" alt=""/>{item.author}</p>
                          <p className="quest__cat"><span>Категория: </span>{item.cat}</p>
                          <p className="quest__cat"><span>Сложность: </span>{item.dificulty}</p>
                          <div className="quest__reward">
                            <span className="quest__reward--loot"><span>Предмет</span>{item.reward.loot}</span>
                            <span className="quest__reward--money"><span>Деньги</span>{item.reward.money}</span>
                            <span className="quest__reward--xp"><span>Опыт</span>{item.reward.xp}</span>
                          </div>
                        </Link>
                     )
                  }  
                }                                                  
               })}
           </section>            
        )
    }
}

export default Events_category