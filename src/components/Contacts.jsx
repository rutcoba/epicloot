import React from 'react';
import ReactDOM from 'react-dom';

import Back_btn from './Back_btn';

class Contacts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            load: false
        }
    }
  
    componentDidMount(){
      let obj = this;
      setTimeout(function(){
        obj.setState({load: true});
      },100);
    }
  
    render() {
        return (
            <section id="contacts"
              className={`screen-section ${this.state.load ? 'load-component' : ''}`}> 
               <h2 className="title--page">
                 <Back_btn />
                 Наши контакты
               </h2>
               <p className="main-text">Напишите нам, и наши специалисты перезвонят вам, пожелают спокойной ночи или расскажут лучшую историю в вашей жизни</p>
               <form action="" className="custom_form--feedback">
                  <label className="field-block">
                    <input type="text" placeholder="Ваше имя" />
                  </label>
                  <label className="field-block">
                    <input type="email" placeholder="Ваш email" />
                  </label>
                  <label className="field-block">
                    <textarea placeholder="Введите сообщение" />
                  </label>
                  <button className="btn btn--send">Отправить</button>
               </form>     
           </section>
        )
    }
}

export default Contacts