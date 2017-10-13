import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
  constructor(props){
      super(props);
      this.state = {

      }
  }
  componentDidMount(){
    console.log(this.props.mess);
  }
  render() {
      return <span className="popup popup--message">{this.props.messText}</span>
  }
}

export default Message