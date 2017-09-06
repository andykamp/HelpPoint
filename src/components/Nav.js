import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { } from '../actions';
import { browserHistory } from 'react-router';
import { Form, FormControl, Button } from 'react-bootstrap';
import Search from './Search';



import '../App.css';

class Nav extends Component {
  componentDidMount() {


  }


  render() {
    return (

      <div className='outerDivSearch'>

        <div className='helpPointHeader'>
          <div className = 'hpHeaderBody'>
            <img src={require('./images/nav.png')} alt="nav" className="navpage_logo_top" />
            <img src={require('./images/small_header.png')} alt="Header" className="Header_img_bottom" />
          </div>
        </div>

        <Search />
      </div>
    );
  }

}

export default connect(null, {  })(Nav);
