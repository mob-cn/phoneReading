import React,{Component} from 'react'
// 定义路由
import {Link } from 'react-router-dom';

export default class Home extends Component{
    render(){
        return(
            <div>
                <h1>Home</h1>
                <p><Link to='/MyTopic/'>我的专题MyTopic</Link></p>
                <p><Link to='/BrowseRecord/'>浏览记录BrowseRecord</Link></p>
                <p><Link to='/MyCollection/'>我的文集MyCollection</Link></p>
                <p><Link to='/AllFocus/'>关注的专题/文集/连载AllFocus</Link></p>
                <p><Link to='/Member/'>会员Member</Link></p>
                
                
            </div>
        )
    }
}