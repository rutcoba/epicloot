import React from 'react';
import ReactDOM from 'react-dom';

class Our_team extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            load: 0
        }
    }
  
    componentDidMount(){
      let obj = this;
      setTimeout(function(){
        obj.setState({load: 1});
      },100);
    }

    render() {
        return (
            <section id="our_team" 
              className={`screen-section ${this.state.load === 1 ? 'load-component' : ''}`}> 
               <h2 className="title--page">Наша команда</h2>     
           </section>
        )
    }
}

export default Our_team