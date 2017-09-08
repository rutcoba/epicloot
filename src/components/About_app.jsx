import React from 'react';
import ReactDOM from 'react-dom';

class About_app extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
           <section id="about_app" className="screen-section">                 
                <h1 className="title--page">About app</h1>
                <p className="main-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, nostrum!</p>
                <p className="main-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id similique accusantium optio fugiat nihil ullam laudantium atque fugit perspiciatis, voluptas!</p>
                <p className="main-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam natus esse molestias quibusdam excepturi fuga.</p>
           </section>            
        )
    }
}

export default About_app;