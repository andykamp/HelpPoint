import React, { Component } from 'react';
import logo from './logo.svg';
import firebase from 'firebase';
import { connect } from 'react-redux'; //to get acces to the actioncreater
import { writeScrollToDatabase, subscribeToScroll, activateScroll, startLoading } from './actions'; //all the actions in the actioncreator
import './App.css';
import {} from './components/images'
import MyPdfViewer from './components/Pdf';
// togetherjs script
import './togetherjs/togetherjs.html'
// draw
//import './togetherjs/draw.html'
// needed to find nodes in html
import ReactDOM from 'react-dom'


class App extends Component {
//BACKEND//

componentWillMount() {
  this.props.startLoading();

}
  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll.bind(this));
      this.props.subscribeToScroll();
      // finds the button and adds the onclick attribute with the non react javascript
      ReactDOM.findDOMNode(this.refs.together).setAttribute('onclick', 'TogetherJS(this); return false;');
      // starts draw script

      setTimeout(function(){
      const script = document.createElement("script");
      script.src = require('./togetherjs/draw.html')
      script.async = true;
      document.body.appendChild(script);
    }, 5000);
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

renderScreen(){
  if(this.props.loading === true) {
    //showspinner
  }
}
  render() {
    console.log('passivescroll', this.props.passiveScroll);

    return (
      <div>
      <div className="App">

        <div className="draw">

        <div className = "divAroundThis">
          <div className="btnTop btn-group btn-group-justified" style={{width: '100%'}}>
            <a className="btn btn-info color-picker upper-button">Blue</a>
            <a className="btn btn-success color-picker">Green</a>
            <a className="btnMiddle btn btn-info">
              <img src={require('./images/plus.png')} alt="plus" className="plus" />
              <img src={require('./images/minus.png')} alt="minus" className="minus" />
            </a>
            <a className="btnMiddle btn btn-info">Screenshot</a>
            <a className="btn btn-warning color-picker">Yellow</a>
            <a className="btn btn-danger color-picker">Red</a>
            <a className="btn btn-success color-picker black-pick upper-button" style={{borderWidth: 0, backgroundColor: 'black'}} >Black</a>

          </div>
          </div>

          <div className="getTogetherBtn">
          <button className="btnTogether btn-info" ref="together">
            Start Together
          </button>
          </div>

          <div id="sketchContainer" style={{width: '100%', height: '100%', border: 1,}}>

            <MyPdfViewer />
          </div>

          <footer class="fixed-bottom" className="footer btn-group btn-group-justified">
            <a className="btn btn-info user-color-pick bottom-button">User Color</a>
            <a className="btn btn-success plus-size">
              <i className="fa fa-plus-square">Plus</i>
            </a>
            <a className="btn btn-warning clear">
              <i className="fa fa-times-circle">Clear</i>
            </a>
            <a className="btn btn-danger minus-size">
              <i className="fa fa-minus-square">Minus</i>
            </a>
            <a className="btn btn-default eraser bottom-button" >
              <i className="fa fa-eraser">Eraser</i>
            </a>
          </footer>
        </div>

      </div>

    </div>
    );
  }
  }



const mapStateToProps = (state) => {
  const { scroll, passiveScroll } = state.scroll;
  const { loading } = state.pdf;

  //createQueue is from the reducer/index and is the reucer!
  return { scroll, passiveScroll };
};
export default connect(mapStateToProps, { writeScrollToDatabase, subscribeToScroll, activateScroll, startLoading })(App);
