import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink, Route } from 'react-router-dom';

import Events_category from './Events_category';
import Event from './Event';

import quests from './../data/quests';

class Events_n_quests extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        val: '',
        openList: false,
        category: []
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
    this.setState({val: this.props.match.params.id});
  }
  componentDidMount(){
    var questsArr = Object.values(quests); 
    var newCat = {};
    var categoryArr = [];
    questsArr.sort();
    for (var q = 1, i = 0; q < questsArr.length; ++q) {
      if (questsArr[q].cat !== questsArr[q-1].cat) {
        categoryArr[i++] = questsArr[q];
      }
    }
    this.setState({category: categoryArr});
    console.log(categoryArr);
  }
  
    render(){     
      return (
            <section id="events_n_quests" className="screen-section"> 
               <h2 className="title--page">Задания и квесты</h2>
               <div className="field-block">
                 <input type="text" placeholder="выберите категорию" value={this.state.val} onFocus={this.openCategoryList}/>
                 <ul className={this.state.openList == true ? 'field__dropdown category__dropdown open' : 'category__dropdown'}>
                   {this.state.category.map((item, val) => { 
                     return(
                       <li key={val}><Link to={`/events_n_quests/${item.link}`} className="category__link" onClick={this.closeCategoryList} id={item.link}>{item.cat}</Link></li>
                     )
                   })}
                 </ul>              
               </div>
              <div>
                <Route exact path={`/events_n_quests/:link`} component={Events_category}/>
                <Route exact path={`/events_n_quests/:link/:id`} component={Event}/>
              </div> 
           </section>            
        )
    }
}
  

export default Events_n_quests