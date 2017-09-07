import React from 'react';
import ReactDOM from 'react-dom';

class What_we_do extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
           <section id="what_we_do" className="screen-section">
                   <h2 className="title--section">What we do</h2>
                   <div className="what-we-do_item">
                     <div className="hex"></div>
                     <p className="main-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, aut?
                     </p>
                   </div>
                   <div className="what-we-do_item">
                     <div className="hex"></div>
                     <p className="main-text">Minus magnam consequuntur tenetur explicabo dolores. Accusamus iure, excepturi omnis.
                     </p>
                   </div>
                   <div className="what-we-do_item">
                     <div className="hex"></div>
                     <p className="main-text">Fugiat fugit laudantium, ipsum totam ea doloribus cumque modi ratione!
                     </p>
                   </div>
               </section>          
        )
    }
}

export default What_we_do;