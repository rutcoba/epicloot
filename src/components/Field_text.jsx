import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';

class Field_text extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        }
        this.changeValue = this.changeValue.bind(this);
    }
  
    changeValue(){
      this.setState({ value: ReactDOM.findDOMNode(this.refs.text).value });
      setTimeout(()=>{
        if(this.props.getVal){
          this.props.getVal(this.props.name, this.state.value);
        }        
      },0)
    }
  
    render() {
        return (
           <label className="field-block">
              {this.props.ico ? <i className="material-icons">{this.props.ico}</i> : '' }
               <input type={this.props.type} 
                     name={this.props.name} 
                 placeholder={this.props.placeholder ? this.props.placeholder : '' } 
                 autoComplete={this.props.autoComplete ? this.props.autoComplete : 'off' }
                    autoFocus={this.props.autoFocus ? true : false} 
                     ref='text'
                     value={this.state.value} 
                     onChange={this.changeValue} 
               />
           </label>            
        )
    }
}

export default Field_text;