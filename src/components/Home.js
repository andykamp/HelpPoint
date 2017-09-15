import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { } from '../actions';
import { browserHistory } from 'react-router';



import '../App.css';


class Home extends Component {

  componentDidMount() {


  }

  onBackendPress() {
    browserHistory.push('/Backend');

  }

  onNavPress() {
    browserHistory.push('/nav');
  }



  render() {
//everything must be inside a div
    return (
      <div className="body">
          <img src={require('./images/header.png')} alt="logo" className="Header_img" />
          <div className="Logos">
            <img src={require('./images/dnb.png')} alt="DNB" className="dnb" />
            <img src={require('./images/bronnoysund.jpg')} alt="Brønnøysund" className="bronnoysund" />
            <img src={require('./images/nav.png')} alt="NAV" className="nav" onClick={this.onNavPress} />
          </div>
      </div>

  );
  }
}


export default connect(null, {  })(Home);
