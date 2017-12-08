import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';

import About_user from './About_user';

class About_app extends React.Component {
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
           <section id="about_app" 
             className={`screen-section ${this.state.load === 1 ? 'load-component' : ''}`}>
                <h1 className="title--page">В кратце о приложении:</h1>
                <p className="main-text">В данном приложении Вы можете примерить на себе две роли:</p>                
                 <ul>
                   <li><Link className="main-text" to="/about_app/player">Игрок</Link></li>
                   <li><Link className="main-text" to="/about_app/npc">НИП</Link></li>
                 </ul>
                <div>
                  <Route path={`/about_app/:id`} component={About_user}/>
                </div>
           </section>            
        )
    }
}

export default About_app;