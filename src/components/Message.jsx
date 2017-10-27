import React from 'react';
import ReactDOM from 'react-dom';

import sys_message from './../data/system_message';

class Message extends React.Component {
  constructor(props){
      super(props);
      this.state = {

      }
  }
  componentDidMount(){  
  }
  render() {
    const mess_array = sys_message.filter(message => {
      return message.event == this.props.mess;
    });
    const mess = mess_array[(Math.floor(Math.random()*mess_array.length))];
      return <span className={`popup popup--message ${this.props.className ? this.props.className : ''}`}>{mess.text}</span>
  }
}

export default Message