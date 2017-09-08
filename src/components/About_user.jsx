import React from 'react';
import ReactDOM from 'react-dom';

import users from './../data/users';

class About_user extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: ''
        }
    }
    render() {
      var arrJSON = Object.values(users),
          user = this.props.match.params.id;
      
        return (
            <section id="about_user" className="inner-section">
              {arrJSON.map((i, val) => {
              console.log(val);
              if(i[0].en == user){
                return(
                  <div id={val} key={val}>
                    <p className="title--block">Основная информация:</p>
                    <p>{i[0].info}</p>
                    <p className="title--block">Бонусы:</p>
                    <p>{i[0].bonus}</p>
                  </div>
                )
              }                
              })}
              <p>Все заявки на задания проходят модерацию, в связи с чем снижена вероятность несоответствия сложности задания с его наградой.</p>
           </section>            
        )
    }
}

export default About_user