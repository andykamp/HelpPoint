import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { } from '../actions';
import { browserHistory } from 'react-router';
import { Form, FormControl, Button } from 'react-bootstrap';
import $ from 'jquery';

let files = {

  ansvar: 'ansvar.pdf',
  inntekt: 'inntekt.pdf',
  test: 'test.pdf',


}


class SearchArea extends React.Component {



    renderItems(){
      if files.startsWith(e.target.value){
        return this.state.results;
      }
    }
    // Render


export default SearchArea;
