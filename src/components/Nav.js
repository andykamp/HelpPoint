import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { } from '../actions';
import { browserHistory } from 'react-router';
import { Form, FormControl, Button } from 'react-bootstrap';
import SearchArea from './Search';



import '../App.css';

class Nav extends Component {
  componentDidMount() {


  }


  render() {
    return (

      <div className='outerDivSearch'>

        <div className='helpPointHeader'>
          <div className = 'hpHeaderBody'>
            <img />
          </div>
        </div>

        <div className="navbody">
          <div className="navbody">
            <img src={require('./images/nav.png')} alt="nav" className="navpage_logo" />
          </div>
        </div>

        <Form inline>
          <FormControl
            className = 'formControl'
            placeholder = 'Search file'
          />
        </Form>
      </div>
    );
  }

}

export default connect(null, {  })(Nav);
