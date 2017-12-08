import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
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
         <section id="home_page" 
                  className={`screen-section ${this.state.load === 1 ? 'load-component' : ''}`}>
              <h1 className="title--page">Home</h1>
              <p className="main-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, nostrum!</p>
              <p className="main-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id similique accusantium optio fugiat nihil ullam laudantium atque fugit perspiciatis, voluptas!</p>
              <p className="main-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam natus esse molestias quibusdam excepturi fuga.</p>
         </section>   
        )
    }
}

export default Home;