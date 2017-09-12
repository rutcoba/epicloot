import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink, Route, Redirect } from 'react-router-dom';

import Events_category from './Events_category';
import Event from './Event';

import quests from './../data/quests';

class Events_n_quests extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      val: '',
      openList: false,
      open_search_field: false,
      ico_search: 'search',
      category: []
    }
    this.changeValue = this.changeValue.bind(this);
    this.openCategoryList = this.openCategoryList.bind(this);
    this.closeCategoryList = this.closeCategoryList.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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
/***********************************************
//Вариант с new Set выдает одномерный массив, что исключает возможность переделки линка
    categoryArr = questsArr.map(item => {
      return item.cat;
    })
    categoryArr = [... new Set(categoryArr)];
************************************************/
    categoryArr = categoryArr.map(item => {
      return newCat = {
       cat: item.cat,
       link: item.link
      }
    })
    this.setState({category: categoryArr});
  }
  changeValue(event){
    this.setState({ val: event.target.value });
  }
  
  handleSearch(){
    this.state.open_search_field == false ?
      (
        this.setState({open_search_field: true}),
        this.setState({ico_search: 'close'})
      ) : (
        this.setState({open_search_field: false}),
        this.setState({ico_search: 'search'}),
        this.setState({val: ''}),
        this.closeCategoryList()
      );
  }
  
  changeCategory(event){
    this.closeCategoryList();
    this.setState({val: event.target.innerText});
  }
  
  openCategoryList(){
    this.setState({openList: true});
  }
  closeCategoryList(event){
    this.setState({openList: false});
  }
  
    render(){
      var redirect = '';
      if(this.props.location.pathname == '/events_n_quests'){ 
        redirect = <Redirect from='/events_n_quests' to='/events_n_quests/all' />;
      }
      var pathnameArr = this.props.location.pathname.split('/');
      var regExp = /\d/;
      var regExp_search = new RegExp("(" + this.state.val + ")", "i");
      var searchField = '';
      var categoryList = '';
      if(!regExp.test(pathnameArr[pathnameArr.length-1])){
        searchField = 
          <div>
           <h2 className="title--page title--with_action">Задания и квесты <i className="material-icons" onClick={this.handleSearch}>{this.state.ico_search}</i></h2>
           <div className={`search__block field-block ${this.state.open_search_field == true ? 'open' : ''} `}>
             <input type="text" placeholder="введите или выберите категорию" value={this.state.val} onFocus={this.openCategoryList} onChange={this.changeValue}/>
             <ul className={this.state.openList == true ? 'field__dropdown category__dropdown open' : 'category__dropdown'}>
                <li><Link to={`/events_n_quests/all`} className="category__link" onClick={this.changeCategory} id="all">все</Link></li>
               {this.state.category.map((item, val) => {
                 categoryList = 
                    <li key={val}><Link to={`/events_n_quests/${item.link}`} className="category__link" onClick={this.changeCategory} id={item.link}>{item.cat}</Link></li>;
                 if(this.state.val == ''){                   
                   return(
                     categoryList
                   )
                 } else {
                   if(regExp_search.test(item.cat)){
                     return(
                       categoryList
                     )                     
                   }
                 }
               })}
             </ul>
           </div>
         </div>;
      } else {
        searchField = '';
      }
      return (
            <section id="events_n_quests" className="screen-section">
              {searchField}
              <div>
                {redirect}
                <Route exact path={`/events_n_quests/:link`} component={Events_category}/>
                <Route exact path={`/events_n_quests/:link/:id`} component={Event}/>
              </div> 
           </section>            
        )
    }
}
  

export default Events_n_quests