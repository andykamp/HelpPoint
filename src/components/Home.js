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
      <div>
        <div>
          <img src={require('./images/header.png')} alt="logo" className="Header_img" />
          <div style={{ height: '20px' }} />
          <div className="Home_body">
            <div className="Home_body">
              <div>
                <h1 className="Helppoint_text">What is helppoint?</h1>
                <p className="Helppoint_text">We are something pretty cool and stuff and different stuff and stuff cool
                  We are something pretty cool and stuff and different stuff and stuff cool
                </p>
              </div>
            </div>
            <div className="Home_body">
              <img src={require('./images/computers.jpg')} alt="computer" className="ComputerImg" />
            </div>
          </div>
        </div>

        <div style={{ height: '30px' }} />

        <div>
            <div className="Home_body">
              <div>
                <h1 className="Helppoint_text">Who uses helppoint?</h1>
              </div>
            </div>
            <div style={{ height: '10px' }} />
            <div className="Home_body">
              <div className="Padding">
                <img src={require('./images/dnb.png')} alt="DNB" className="dnb" />
              </div>
              <div className="Padding">
                <img src={require('./images/bronnoysund.jpg')} alt="Brønnøysundregistrene" className="bronnoysund" />
              </div>
              <div className="Padding">
                <img src={require('./images/nav.png')} alt="nav" className="nav" onClick={this.onNavPress} />
              </div>

            </div>
        </div>


      </div>
      /*<div>
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
    */
  );
  }
}


export default connect(null, {  })(Home);
