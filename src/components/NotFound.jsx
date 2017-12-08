import React from 'react';

class NotFound extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          load: 0
      }
  }
  
  componentDidMount(){
    window.scrollTo(0,0, 1000);
      let obj = this;
      setTimeout(function(){
        obj.setState({load: 1});
      },100);
  }
  render(){
    return (
      <section id="not_found" className={`screen-section ${this.state.load === 1 ? 'load-component' : ''}`}>
        <p className="main-text"><i className="material-icons">error_outline</i> Не найдено</p>
        <p className="main-text">Вероятно, битая ссылка</p>
        <p className="main-text">Вы можете попробовать вернуться на главную и нажать на пункт меню</p>
      </section>
    )
  }
}

export default NotFound;