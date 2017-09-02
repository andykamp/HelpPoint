import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { } from '../actions';
import { browserHistory } from 'react-router';



import '../App.css';

class Nav extends Component {
  componentDidMount() {


  }


  render() {
    return (
      <div className="navbody">
        <div className="navbody">
          <img src={require('./images/nav.png')} alt="nav" className="navpage_logo" />
        </div>
      </div>
    );
  }

}

export default connect(null, {  })(Nav);
