import React from 'react';
import ReactDOM from 'react-dom';

class Level extends React.Component {
  constructor(props){
      super(props);
      this.state = {
      }
  }
  render(){
    let exp = this.props.data,
        level = Math.floor(exp/1000),
        needExp = exp%1000/10;
    let styleScale ={}
    if (!isNaN(needExp)){
      styleScale = {
        width: needExp + '%'
      };
    }
    return(
      <div className={`profile__level ${this.props.className}`}>
        <span> {level} </span>
        <p className={`level__scale`}>
          <span style={styleScale}></span>
        </p>
      </div>
    )
  }
}

export default Level