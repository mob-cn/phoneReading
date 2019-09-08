import React,{Component} from 'react'
import {Tabs } from 'antd-mobile';
import './BrowseRecord.less'
    const tabs = [
            { title: '今日', sub: '1' },
            { title: '更早', sub: '2' }
    ];
    const history = [
            { _id: '1', title: '送你一张交互设计画布（附PDF下载）', time: '刚刚'},
            { _id: '2', title: '简书，你在为谁而写？', time: '5分钟前'},
            { _id: '3', title: '在简书写作，然我成长！', time: '10分钟前'},
            { _id: '4', title: '如何让运营岗位的工作不可替代？你需要建立自己的个人品牌', time: '40分钟前'},
            { _id: '5', title: '简书阅读，最重要的一条建议（必读）', time: '55分钟前'} 
    ]
    const history2 = [
        { _id: '1', title: '提升写作效率的8款神器：碎片灵感不再丢', time: '23小时前'},
        { _id: '2', title: '《从领开始做运营》-简书小白如何运营简书', time: '23小时前'},
        { _id: '3', title: '这款专为PPT设计的插件，竟然碾压了坚果TNT的语音操控', time: '06-22 08：58'},
    ]   
    const TabExample = () => (
        <div className='tab'>
        <Tabs tabs={tabs}
            initialPage={0}
     
        >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                <div id='one'>
                    <div className='top'>
                        <img src="/img/book2.jpg" alt=""  />
                        <p >今天一共阅读了<span>7985</span>字,超过了<span>69%</span>的简友哦！</p>
                    </div>

                    {history.map(
                        item=><li key={item._id}>
                            <p className='pp'>{item.title}</p>
                            <span>{item.time}</span>
                        </li>
                        )}
                    <div className='end'>- end-</div>
                </div>

            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                <div id='one'>
                    {history2.map(
                        item=><li key={item._id}>
                            <p className='pp'>{item.title}</p>
                            <span>{item.time}</span>
                        </li>
                        )}
                    <div className='end'>- end-</div>
                </div>      
            </div>
        </Tabs>
        </div> 
    )
export default class BrowseRecord extends Component{
    // 构造函数
    // constructor(props) {
    //     super(props);
    // }
    goback(e){
        this.props.history.goBack();
    }
    render(){

        return(
            <div className='w-BrowseRecord'>
                    {/* icon={<img className='jian' alt='' src='icon/zuojiantou.svg'></img>} */}
     
                {/* <h1>hola AllFocus</h1> */}
                <TabExample />
                <span>
                    <img className='jian' alt='' src='icon/zuojiantou.svg'
                        onTouchEnd={()=>this.goback()}
                    >

                    </img>
                </span>
            </div>
        )
    }
}