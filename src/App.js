import React, { Component } from 'react';
import logo from './logo.svg';
import firebase from 'firebase';
import { connect } from 'react-redux'; //to get acces to the actioncreater
import { writeScrollToDatabase, subscribeToScroll, activateScroll } from './actions'; //all the actions in the actioncreator
import './App.css';
import './ScriptDraw.html';

class App extends Component {
//BACKEND//

componentWillMount() {
       /*const script = document.createElement("script");

       script.src = "https://togetherjs.com/togetherjs-min.js";
       script.async = true;

       document.body.appendChild(script);*/
   }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll.bind(this));
      this.props.subscribeToScroll();
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

        <div className="App-main">
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
