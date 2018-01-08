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
        this.getval = this.getval.bind(this);
    }
  
    componentDidMount(){
      this.setState ({
          value: this.props.value
      })
    }
  
    changeValue(){
      this.setState({ value: ReactDOM.findDOMNode(this.refs.text).value });
      
    }
  
    getval(){
      if(this.props.getVal){
        this.props.getVal(this.props.name, this.state.value);
      }
    }
  
    render() {
      let input =
               <input type={this.props.type} 
                      name={this.props.name} 
                      placeholder={this.props.placeholder ? this.props.placeholder : '' } 
                      autoComplete={this.props.autoComplete ? this.props.autoComplete : 'off' }
                      autoFocus={this.props.autoFocus ? true : false} 
                      ref='text'
                      value={this.state.value} 
                      onChange={this.changeValue}
                     onBlur={this.getval} 
               />;
      if (this.props.type == 'textarea'){
        input = <textarea 
                     ref='text'
                     placeholder={this.props.placeholder ? this.props.placeholder : '' } 
                     name={this.props.name} 
                     onChange={this.changeValue}
                     onBlur={this.getval}
                     defaultValue={this.state.value} />
      }
        return (
           <label className={`field-block ${this.props.className ? this.props.className : ''}`}>
              {this.props.ico ? <i className="material-icons">{this.props.ico}</i> : '' }
              {input}
           </label>            
        )
    }
}

export default Field_text;