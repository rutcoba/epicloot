import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
          <footer>      
                <p className="main-text copyright">Lorem ipsum dolor</p>
                <p className="main-text email">qweqwe@qwe.qwe</p>
                <p className="main-text phone_number">8-789-123-243</p>
           </footer>
        )
    }
}

export default Footer