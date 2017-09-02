import React, { Component } from 'react';
import logo from './logo.svg';
import firebase from 'firebase';
import { connect } from 'react-redux'; //to get acces to the actioncreater
import { writeScrollToDatabase, subscribeToScroll, activateScroll } from './actions'; //all the actions in the actioncreator
import './App.css';
// togetherjs script
import './togetherjs/togetherjs.html'
// draw
//import './togetherjs/draw.html'
// needed to find nodes in html
import ReactDOM from 'react-dom'


class App extends Component {
//BACKEND//

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll.bind(this));
      this.props.subscribeToScroll();
      // finds the button and adds the onclick attribute with the non react javascript
      ReactDOM.findDOMNode(this.refs.together).setAttribute('onclick', 'TogetherJS(this); return false;');
      // starts draw script
      const script = document.createElement("script");
      script.src = require('./togetherjs/draw.html')
      script.async = true;
      document.body.appendChild(script);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }


handleScroll(event) {
  let  intElemScrollTop = Math.round(window.scrollY);
        //console.log('scrollTop', window.scrollY);
      const yscroll= intElemScrollTop;
      //writes pixels to database
      if (this.props.passiveScroll === false ){
        this.props.writeScrollToDatabase({ yscroll });
      }

      //window.scrollTo(0,500);
      this.props.activateScroll();
}


  render() {
    console.log('passivescroll', this.props.passiveScroll);

    return (
      <div>
      <div className="App">

        <div className="App-header">
          <div className="header-image">
            Backend
          </div>


          <div className="header-buttons">
            Buttons
          </div>
        </div>

        <button className="btn-info" ref="together">
          Start Together
        </button>

        <div className="draw">
          <div className="btn-group btn-group-justified" style={{marginRight: 5, marginLeft: 5, marginTop: 10, width: '100%'}}>
            <a className="btn btn-info color-picker upper-button">Blue</a>
            <a className="btn btn-success color-picker">Green</a>
            <a className="btn btn-warning color-picker">Yellow</a>
            <a className="btn btn-danger color-picker">Red</a>
            <a className="btn btn-success color-picker black-pick upper-button" style={{borderWidth: 0, backgroundColor: 'black'}} >Black</a>
          </div>
          <div className="clearfix"></div>

          <div id="sketchContainer" style={{width: '100%', height: '100%', border: 1,}}>
            <canvas id="sketch"></canvas>
          </div>

          <div className="btn-group btn-group-justified" style={{marginRight: 5, marginLeft: 5, marginTop: 10, width: '100%'}}>
            <a className="btn btn-info user-color-pick bottom-button" style={{width: '30%'}}>User Color</a>
            <a className="btn btn-success plus-size" style={{width: '15%'}}>
              <i className="fa fa-plus-square">Plus</i>
            </a>
            <a className="btn btn-warning clear" style={{width: '15%'}}>
              <i className="fa fa-times-circle">Clear</i>
            </a>
            <a className="btn btn-danger minus-size" style={{width: '15%'}}>
              <i className="fa fa-minus-square">Minus</i>
            </a>
            <a className="btn btn-default eraser bottom-button" style={{width: '35%', borderTopWidth: 0}}>
              <i className="fa fa-eraser">Eraser</i>
            </a>
          </div>
          <text>
             {this.props.scroll}
          </text>
        </div>


      </div>
      <div className="under-Div">
        <h1>About us</h1>
      </div>
    </div>
    );
  }
  }



const mapStateToProps = (state) => {
  const { scroll, passiveScroll } = state.scroll;

  //createQueue is from the reducer/index and is the reucer!
  return { scroll, passiveScroll };
};
export default connect(mapStateToProps, { writeScrollToDatabase, subscribeToScroll, activateScroll })(App);
