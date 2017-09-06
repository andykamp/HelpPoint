import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { } from '../actions';
import { browserHistory } from 'react-router';
import { Form, FormControl, Button } from 'react-bootstrap';
import $ from 'jquery';

let files = [
  'ansvar.pdf',
  'inntekt.pdf',
  'test.pdf',
  'ansvaret.pdf'

]


class Search extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        search:''
      }
    }

    getState(){
      return this.state.search;
    }

    updateSearch(event){
      this.setState({search: event.target.value});
      this.renderItems();
    }

    getResults(){
      let search = this.getState();
      let results = [];
      let file;
      for (var i = 0; i < files.length; i++) {
        if(files[i].startsWith(search)){
          results = [...results, files[i]];
        }
      }
      return results;

    }

    renderItems(){

      let results;
      results = this.getResults();


      return(
        <div className='showResults'>{results}</div>
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
