import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
  
    render() {
        return (
           <section id="home_page" className="screen-section">
               <div className="hex"></div> 
               <svg height="0" width="0">
                  <defs>
                    <clipPath id="hex">
                      <path d="M59 2.8867513459481a10 10 0 0 1 10 0l45.425625842204 26.226497308104a10 10 0 0 1 5 8.6602540378444l0 52.452994616207a10 10 0 0 1 -5 8.6602540378444l-45.425625842204 26.226497308104a10 10 0 0 1 -10 0l-45.425625842204 -26.226497308104a10 10 0 0 1 -5 -8.6602540378444l0 -52.452994616207a10 10 0 0 1 5 -8.6602540378444"></path>
                    </clipPath>
                  </defs>
                </svg>                  
                <h1 className="title--page">Home</h1>
                <p className="main-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, nostrum!</p>
                <p className="main-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id similique accusantium optio fugiat nihil ullam laudantium atque fugit perspiciatis, voluptas!</p>
                <p className="main-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam natus esse molestias quibusdam excepturi fuga.</p>
           </section>            
        )
    }
}

export default Home;