import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink, Route } from 'react-router-dom';

import Events_category from './Events_category';

import quests from './../data/quests';

class Events_n_quests extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        val: '',
        openList: false,
        category: ''
      }
      this.changeValue = this.changeValue.bind(this);
      this.openCategoryList = this.openCategoryList.bind(this);
      this.closeCategoryList = this.closeCategoryList.bind(this);
      this.changeCategory = this.changeCategory.bind(this);
    }  
  changeValue(){
    
  }
  changeCategory(){
    
  }
  
  openCategoryList(){
    this.setState({openList: true});
  }
  closeCategoryList(){
    this.setState({openList: false});
  }
  
    render(){
      console.log(Object.values(quests));
      return (
            <section id="events_n_quests" className="screen-section"> 
               <h2 className="title--page">Задания и квесты</h2>
               <input type="text" placeholder="выберите категорию" value={this.state.val} onBlur={this.closeCategoryList} onFocus={this.openCategoryList} onClick={this.changeValue}/>
               <ul className={this.state.openList == true ? 'category__dropdown open' : 'category__dropdown'}>
                
               </ul>
              <div>
                <Route path={`/events_n_quests/:id`} component={Events_category}/>
                <Route exact path='/events_n_quests/' component={Events_category}/>
              </div> 
           </section>            
        )
    }
}
  

export default Events_n_quests