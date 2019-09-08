import React, { Component } from 'react';
import Mine from './views/Mine/Mine'
// import { HashRouter, Route ,BrowserRouter} from 'react-router-dom';
// import 'antd-mobile/dist/antd-mobile.css';
import './App.less'
import './reset.css'
import { findcoll } from './action';

class App extends Component {
  change(e){
    this.props.dispatch(findcoll)
  }
  componentDidMount(){
    // console.log(this.props)
  }
  componentWillUpdate(){
    // console.log(this.props)
  }
  render() {
    return (
      <div className='app'>
            <h1 className='bar' onTouchEnd = {e =>this.change(e)}>this is APP</h1>
            {/* <Mine></Mine> */}

              <Mine></Mine> 
              {/* <Route exact path='/' Component={}></Route> */}
           
      </div>
    );
  }
}

export default App;
















