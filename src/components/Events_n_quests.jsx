import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserHistory, Link, NavLink, Route, Redirect } from 'react-router-dom';

import Events_category from './Events_category';
import Event from './Event';
import Back_btn from './Back_btn';

import category from './../data/category';

class Events_n_quests extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      val: '',
      load: false,
      openList: false,
      open_search_field: false,
      ico_search: 'search',
      category: Object.values(category)
    }
    this.changeValue = this.changeValue.bind(this);
    this.openCategoryList = this.openCategoryList.bind(this);
    this.closeCategoryList = this.closeCategoryList.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.emptyValue = this.emptyValue.bind(this);
  } 
  
  componentDidMount(){
    let obj = this;
    setTimeout(function(){
      obj.setState({load: true});
    },100);
  }
  
  changeValue(event){
    this.setState({ val: event.target.value });
  }
  
  emptyValue(){    
    this.setState({val: ''})
  }
  
  handleSearch(){
    this.state.open_search_field == false ?
      (
        this.setState({
          open_search_field: true,
          ico_search: 'close'
        })
      ) : (
        this.setState({
          open_search_field: false,
          ico_search: 'search'
        }),
        this.closeCategoryList(),
        this.emptyValue()
      );
  }
  
  changeCategory(event){
    this.closeCategoryList();
    if (event.target.innerText === 'все') {
      this.emptyValue();
    } else {
      this.setState({val: event.target.innerText});  
    }    
  }
  
  openCategoryList(){
    this.setState({openList: true});
  }
  closeCategoryList(event){
    this.setState({openList: false});
  }
  
    render(){
      const regExp = /\d/;
      const {
        open_search_field,
        openList,
        category,
        val,
        changeCategory,
        load,
        ico_search
      } = this.state;
      let redirect = '',
          pathnameArr = this.props.location.pathname.split('/'),
          regExp_search = new RegExp("(" + val + ")", "i"),
          searchField = '',
          categoryItem = '';
      if(this.props.location.pathname == '/events_n_quests'){ 
        redirect = <Redirect from='/events_n_quests' to='/events_n_quests/all' />;
      }
      if(!regExp.test(pathnameArr[pathnameArr.length-1])){
        searchField = 
          <div>
            <h2 className="title--page title--with_action">
              <Back_btn onClick={this.emptyValue} />
              Задания и квесты 
              <i className="material-icons" onClick={this.handleSearch}>{ ico_search }</i>
            </h2>
           <div className={`search__block field-block ${ open_search_field ? 'open' : '' } `}>
             <input type="text" 
                     placeholder="введите или выберите категорию" 
                     value={val} 
                     onFocus={this.openCategoryList} 
                     onChange={this.changeValue}
             />
             <ul className={openList ? 'field__dropdown category__dropdown open' : 'category__dropdown'}>
                <li>
                  <Link
                    to={`/events_n_quests/all`}
                    className="category__link"
                    onClick={this.changeCategory}
                    id="all">
                    все
                  </Link>
                </li>
               
                {category.map((item, val) => {
                 if(val == '' || regExp_search.test(item.cat)){                   
                   return <li key={val}>
                             <Link
                               to={`/events_n_quests/${item.link}`}
                               className="category__link"
                               onClick={this.changeCategory}
                               id={item.link}>
                               
                               {item.cat}
                               
                             </Link>
                          </li>
                 } 
               })}
               
             </ul>
           </div>
         </div>;
      } else {
        searchField = '';
      }
      return (
        <section id="events_n_quests" 
                 className={`screen-section ${ load ? 'load-component' : '' }`}>
          {searchField}
          <div>
            {redirect}
            <Route exact path={`/events_n_quests/:link`} component={Events_category}/>
            <Route exact path={`/events_n_quests/:link/:id`} component={Event}/>
            <Route exact path={`/profile_quests/:link/:id`} component={Event}/>
            <Route exact path={`/profile_events/:link/:id`} component={Event}/>
          </div> 
       </section>
      )
    }
}
  

export default Events_n_quests