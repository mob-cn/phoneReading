import React,{Component} from 'react'
import './Member.less'

export default class Member extends Component{
    // 构造函数
    // constructor(props) {
    //     super(props);
    // }
    goback(e){
        this.props.history.goBack();
    }
    render(){

        return(
            <div className='w-Member'>
                <div className='topbar'>
                    <div className='left'>
                        <img className='jian' alt='' src='/icon/zuojiantou.svg' onTouchEnd={(e)=>this.goback(e)}></img>
                        <span>简书会员</span>
                    </div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className='master'>
                        <p>努力拼搏的80后</p>
                        <p>当前未开通哦</p>
                    </div>
            </div>
        )
    }
}