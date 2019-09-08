import React,{Component} from 'react'
// 定义路由
import {  Route, HashRouter } from 'react-router-dom';
//引入组件
import BrowseRecord from './BrowseRecord/BrowseRecord'
import MyTopic from './MyTopic/MyTopic'
import Home from './Home/Home'
import MyCollection from './MyCollection/MyCollection'
import AllFocus from './AllFocus/AllFocus'
import Member from './Member/Member'
import { dealFn, store } from '../../store';
let dellMyCollection = dealFn(MyCollection);
export default class Mine extends Component{
    
    render(){
        return(
            <HashRouter>
                <div>
                        <Route exact
                         path='/' component={Home}></Route>
                        <Route path='/MyTopic' component={MyTopic}></Route>
          +              <Route path='/BrowseRecord' component={BrowseRecord}></Route>
                        <Route path='/MyCollection' component={dellMyCollection}></Route>
                        <Route path='/AllFocus' component={AllFocus}></Route>
                        <Route path='/Member' component={Member}></Route>
                       
                    {/* <span onTouchEnd={e => this.goto(e)}>AllFocus</span>
                    <span>BrowseRecord</span> */}
                </div>
            </HashRouter>
        )
    }
}