import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { } from '../actions';
import { browserHistory } from 'react-router';
import { Form, FormControl, Button } from 'react-bootstrap';
import $ from 'jquery';

let files = [
  'Lønnsgarantidekning.pdf',
  'Kompetansestrategi.pdf',
  'Tillegsstønader.pdf',
  'Egenvurdering.pdf'

]


class Search extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        search:''
      }
    }

    handleClick(t){
      if(t == 'Lønnsgarantidekning.pdf'){
        browserHistory.push('/nav/lonnsgarantidekning');
      } else {
        browserHistory.push('/');
      }

    }
    getState(){
      return this.state.search;
    }

    updateSearch(event){
      this.setState({search: event.target.value.toLowerCase()});
      this.renderItems();
    }

    getResults(){
      let search = this.getState();
      let results = [];
      let file;
      for (var i = 0; i < files.length; i++) {
        if(files[i].toLowerCase().startsWith(search)){
          results = [...results, files[i]];
        }
      }
      return results;

    }

    renderItems(){

      let results;
      results = this.getResults();


    var stationsArr = [];
     for (var i = 0; i < results.length; i++) {
         stationsArr = [...stationsArr,
             <div className="station" style={{cursor: 'pointer'}} onClick={this.handleClick.bind(this,results[i])} inline>

                 <div className="item" inline>
                  <p className='resultsOut'>
                  <img src={require('./images/pdf-logo.png')} alt="pdf" className="pdf" />
                  {results[i]}
                  </p>
                </div>

             </div>];
     }

      return(
        <div className='showResults'>{stationsArr}</div>
      );
    }

    render(){
      return(
        <div>
        <Form inline>
          <input
            className = 'formControl'
            placeholder = 'Search file'
            onChange= {this.updateSearch.bind(this)}
          />
        </Form>
        <div>{this.renderItems()}</div>
        </div>


      );
      //event =>this.setState({newSearch: event.target.value})

    }


    }

    export default Search;
