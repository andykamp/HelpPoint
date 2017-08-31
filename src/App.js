import React, { Component } from 'react';
import logo from './logo.svg';
import firebase from 'firebase';
import { connect } from 'react-redux'; //to get acces to the actioncreater
import { writeScrollToDatabase, subscribeToScroll, activateScroll } from './actions'; //all the actions in the actioncreator
import './App.css';

class App extends Component {


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
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onclick="TogetherJS(this); return false;">Start TogetherJS</button>
        <div style={{ height: 1000, alignItems: 'center', flexDirection: 'center'}}>
          <text>
             {this.props.scroll}
          </text>
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
