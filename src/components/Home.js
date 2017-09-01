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



  render() {

    return (
      <div>
      <div className="App">

        <div className="App-header">
          <div className="header-image">
            Logo
          </div>


          <div className="header-buttons">
            Buttons
          </div>
        </div>

        <div className="App-main">
          <div style={{ textAlign: 'center'}}>



            <div className="home-info">
              <div className="home-buttons"></div>




              <div className="home-buttons">
                <div>
                  <h1 className="header-textphoto" style={{ width: '100%'}}>Welcome to HelpPoint</h1>
                  <div style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <button onClick={this.onBackendPress.bind(this)}
                      className="btn btn-primary"

                    >
                      Backend
                    </button>

                  </div>
                </div>
              </div>

              <div className="home-buttons"></div>

          </div>

          </div>
        </div>


      </div>
      <div className="under-Div">
        <h1>About us</h1>
      </div>
    </div>
    );
  }
}


export default connect(null, {  })(Home);
