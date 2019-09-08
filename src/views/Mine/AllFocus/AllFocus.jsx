import React,{Component} from 'react'
import { NavBar, Tabs } from 'antd-mobile';
import List1 from './List1';
import List2 from './List2';
import List3 from './List3';
import './AllFocus.less'
    const tabs = [
            { title: '专题', sub: '1' },
            { title: '文集', sub: '2' },
            { title: '连载', sub: '3' },
    ];
    const TabExample = () => (
        <div className='tab'>
        <Tabs tabs={tabs}
            initialPage={0}
        >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
            <List1></List1>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
            <List2></List2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
            <List3></List3>
            </div>
        </Tabs>
        </div> 
    )
export default class AllFocus extends Component{

    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
			data: []
		}
    }

    goback(e){
        this.props.history.goBack();
    }
    render(){

        return(
            <div className='w-AllFocus'>
                <NavBar
                    mode="light"
                    
                    icon={<img className='jian' alt='' src='/icon/zuojiantou.svg'></img>}
                    leftContent='关注的专题/文集/连载'
                    onLeftClick={(e) => this.goback(e)}
                ></NavBar>
                {/* <h1>hola AllFocus</h1> */}
               
                <TabExample />
            </div>
        )
    }
}