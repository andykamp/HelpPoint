import React, { Component } from 'react';
import logo from './logo.svg';
import firebase from 'firebase';
import { connect } from 'react-redux'; //to get acces to the actioncreater
import { BeatLoader } from 'react-spinners';
import Modal from 'react-modal';

import { writeScrollToDatabase, subscribeToScroll, activateScroll, startLoading } from './actions'; //all the actions in the actioncreator
import './App.css';
import MyPdfViewer from './components/Pdf';
import html2canvas from './togetherjs/html2canvas.js';
// togetherjs script
import './togetherjs/togetherjs.html'
// draw
//import './togetherjs/draw.html'
// needed to find nodes in html
import ReactDOM from 'react-dom'


const customStyles = {
  overlay : {
      position          : 'fixed',
      top               : 0,
      left              : 0,
      right             : 0,
      bottom            : 0,
      backgroundColor   : 'rgba(255, 255, 255, 0.75)'
    },
    content : {
      position                   : 'absolute',
      top                        : '0px',
      left                       : '0px',
      right                      : '0px',
      bottom                     : '0px',
      border                     : '1px solid #ccc',
      background                 : '#95CAFE',
      overflow                   : 'auto',
      WebkitOverflowScrolling    : 'touch',
      borderRadius               : '4px',
      outline                    : 'none',
      padding                    : '20px'

    }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
      loadSpinner: true
    };
  }

componentWillMount() {
  this.props.startLoading();
  Modal.setAppElement('body');

}
  componentDidMount() {
      // window.addEventListener('scroll', this.handleScroll.bind(this));
      // this.props.subscribeToScroll();
      // finds the button and adds the onclick attribute with the non react javascript
      ReactDOM.findDOMNode(this.refs.together).setAttribute('onclick', 'TogetherJS(this); return false;');
      // starts draw script
      const that=this;
      setTimeout(function(){
        that.setState({isActive: false});
    }, 2000);
  }

  componentWillReceiveProps(nextProps) {
    console.log('NEXTPROPS');
    if (nextProps.loading === false){
      setTimeout(function(){

      console.log('NEXTPROPS SCRIPT CALLED');
      const script = document.createElement("script");
      script.src = require('./togetherjs/draw.html')
      script.async = true;
      document.body.appendChild(script);
    }, 2000);
    }
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleScroll);
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


renderScreen(){
  if(this.props.loading === true) {
    //showspinner
  }
}




  render() {
    console.log('isLoading', this.props.loading);

    return (
      <div>
        <Modal
         isOpen={this.state.isActive}
         style={customStyles}
         >
          <div className='spinner'>
            <BeatLoader
              color={'#fff'}
              loading={this.state.loadSpinner}

            />
          </div>
        </Modal>


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

          <div className="outsideWrapper" id="sketchContainer" style={{width: 729}}>
              <div className="insideWrapper" id="insideWrapper">
                  <canvas className="coveringCanvas" id="sketch"></canvas>
                  <MyPdfViewer className="coveredImage" id="underpdf"/>

              </div>
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
        </div>

      </div>
      <div className="under-Div">
        <h1>About us</h1>
        <button className="zoom" style={{ height: 30}}>Zoom in to 1.5</button>
        <button className="zoomout" style={{ height: 30}}>Zoom out to 0.5</button>
<a id="download" download="image.png"><button  className="save" id="download" download="image.png" style={{ height: 30}}>save</button></a>

      </div>

    </div>
    );
  }
  }
  // <img className="coveredImage" src={require('./bilde.png')}/>


const mapStateToProps = (state) => {
  const { scroll, passiveScroll } = state.scroll;
  const { loading } = state.pdf;

  //createQueue is from the reducer/index and is the reucer!
  return { scroll, passiveScroll, loading };
};
export default connect(mapStateToProps, { writeScrollToDatabase, subscribeToScroll, activateScroll, startLoading })(App);
