import React,{Component} from 'react'
import { NavBar, Tabs } from 'antd-mobile';
import './MyTopic.less'
    const tabs = [
            { title: '我创建的', sub: '1' },
            { title: '我管理的', sub: '2' }
    ];
    const TabExample = () => (
        <div className='tab'>
        <Tabs tabs={tabs}
            initialPage={0}
            onChange={(tab, index) => { console.log('onChange', index, tab); }}
            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '520px', backgroundColor: '#fff' }}>
            这里还木有内容
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '520px', backgroundColor: '#fff' }}>
            这里还木有内容
            </div>
        </Tabs>
        </div> 
    )
export default class MyTopic extends Component{
    // 构造函数
    // constructor(props) {
    //     super(props);
    // }
    goback(e){
        this.props.history.goBack();
    }
    render(){

        return(
            <div className='w-MyTopic'>
                <NavBar
                    mode="light"
                    icon={<img className='jian' alt='' src='icon/zuojiantou.svg'></img>}
                    leftContent='专题'
                    onLeftClick={(e) => this.goback(e)}
                    rightContent={<a style={{ fontSize: '16px' }}>新建专题</a> }
                ></NavBar>
                {/* <h1>hola AllFocus</h1> */}
               
                <TabExample />
            </div>
        )
    }
}