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
      backgroundColor   : 'rgba(255, 255, 255, 0.75)',
    },
    content : {
      position                   : 'absolute',
      top                        : '0px',
      left                       : '0px',
      right                      : '0px',
      bottom                     : '0px',
      border                     : '1px solid #ccc',
      background                 : 'gray',
      overflow                   : 'auto',
      WebkitOverflowScrolling    : 'touch',
      borderRadius               : '4px',
      outline                    : 'none',
      padding                    : '20px',
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
    document.body.style.backgroundColor = "grey";
    return (
      <div>
        <Modal
         isOpen={this.state.isActive}
         style={customStyles}
         className={{
          base: 'myModal',
          afterOpen: 'myModal',
          beforeClose: 'myModal'
        }}
         >
          <div className='spinner'>
            <BeatLoader
              color={'#fff'}
              loading={this.state.loadSpinner}

            />
          </div>
        </Modal>


      <div className="App">


        <div className="draw">

        <div className = "divAroundThis">
          <div id="topButton" className="btnTop btn-group btn-group-justified" style={{width: '100%'}}>


            <a className="btnLeft btn btn-success color-picker">Green</a>
            <a className="btnLeft btn btn-danger color-picker">Red</a>
            <a className="btnLeft btnBlack btn btn-success color-picker black-pick upper-button">Black</a>

            <a className="btnMiddle btn btn-info" id="zoomOut">
              <img src={require('./components/images/minus.png')} alt="minus" className="minus" />
            </a>
            <div className="btnMidt btn btn-info" id="zoomOrigin">
              <img src={require('./components/images/SmallLogo1.png')} alt="midtlogo" className="midtlogo" />
            </div>
            <a className="btnMiddle btn btn-info" id="zoomIn">
              <img src={require('./components/images/plus.png')} alt="plus" className="plus" />
            </a>

            <a className="btnScreenShot btn btn-info" id="save">Screenshot</a>
            <a className="btn btnClear btn-warning clear">
              <i className="fa fa-times-circle">Clear</i>
            </a>
            <a className="btnEraser btn btn-default eraser bottom-button" >
              <i className="fa fa-eraser">Eraser</i>
            </a>
          </div>
          </div>

          <div className="getTogetherBtn">
          <button className="btnTogether btn-info" ref="together">
            Start Together
          </button>
          </div>

          <div className="outsideWrapper" id="sketchContainer" style={{width: 729}}>
              <div className="insideWrapper" id="insideWrapper">
                  <canvas className="coveringCanvas" id="sketch"></canvas>
                  <MyPdfViewer className="coveredImage" id="underpdf"/>

              </div>
          </div>

          <footer class="fixed-bottom" className="footer btn-group btn-group-justified">
            <div>


            </div>
          </footer>
        </div>

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
