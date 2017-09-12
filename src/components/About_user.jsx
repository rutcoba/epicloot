import React from 'react';
import ReactDOM from 'react-dom';

import roles from './../data/roles';

class About_user extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: ''
        }
    }
    render() {
      var arrJSON = Object.values(roles),
          role = this.props.match.params.id;
      
        return (
            <section id="about_user" className="inner-section">
              {arrJSON.map((i, val) => {
              if(i[0].en == role){
                return(
                  <div id={val} key={val}>
                    <p className="title--block">Основная информация:</p>
                    <p className="main-text">{i[0].info}</p>
                    <p className="title--block">Бонусы:</p>
                    <p className="main-text">{i[0].bonus}</p>
                  </div>
                )
              }                
              })}
              <p className="main-text">Все заявки на задания проходят модерацию, в связи с чем снижена вероятность несоответствия сложности задания с его наградой.</p>
           </section>            
        )
    }
}

export default About_user