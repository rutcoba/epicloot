import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
  constructor(props){
      super(props);
      this.state = {

      }
  }
  componentDidMount(){
  }
  render() {
      return (
        <span className="popup popup--message">{this.props.mess.text}</span>
      )
  }
}

export default Message