import React from 'react';
import ReactDOM from 'react-dom';

class Back_btn extends React.Component {
  constructor(props){
      super(props);
      this.state = {}
      this.handleBack = this.handleBack.bind(this);
  }
  handleBack(){
    window.history.back();
  }
  render(){
    return(
      <i className="material-icons btn--back" onClick={this.handleBack}>keyboard_backspace</i>
    )
  }
}

export default Back_btn