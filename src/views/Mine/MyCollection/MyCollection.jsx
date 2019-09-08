import React,{Component} from 'react'
// 引入axios
import axios from 'axios';
import { NavBar, Icon , WhiteSpace} from 'antd-mobile';
import './MyCollection.less'
import '../../../consts'
import { findcoll,find } from '../../../action';
export default class AllFocus extends Component{
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            show:false
		}
    }
    //点击显示还是隐藏
    collate(e){
        let show = !this.state.show
        this.setState({show:show});
    }
    //排序
    focusCollate(e){
        var sortObj = this.state.data.sort((obj1,obj2) => obj2.focus - obj1.focus);  
        let show = !this.state.show 
        this.setState({data:sortObj,show:show});
    }
    pageCollate(e){
        var sortObj = this.state.data.sort((obj1,obj2) => obj2.number - obj1.number); 
        let show = !this.state.show  
        this.setState({data:sortObj,show:show});
    }
    goback(e){
        this.props.history.goBack();
    }
    //发送请求
    getData(){
        axios
            .get('/data/MyCollection.json')
            .then(({ data }) => this.setState(data))
    }
    componentWillMount(){
        this.props.dispatch(find());
        this.getData();    
    }
    //

    componentDidMount(){
        // console.log( this.props);
    }

    componentDidUpdate(){
        console.log( this.props);
    }
  
    create(){
      
        return this.state.data.map(
            (item) => {
                return(
                    <li key={item._id} className='coli'>
                        <img src={'../'+item.img} alt=""/>
                        <span className='title'>{item.title}</span>
                        <span className='zan'>{item.name+'.'+item.number+'·篇文章·'+item.focus+'·人关注'}</span>
                    </li>
                ) 
            }
        )
    }
 
    render(){
        const show = this.state.show;
        const StyleObj = {
            display: show ? '' : 'none'
        }
       
        return(
            <div className='w-MyCollection'>
                <NavBar
                    mode="light"
                    icon={<img className='jian' alt='' src='/icon/zuojiantou.svg'></img>}
                    leftContent='文集'
                    onLeftClick={(e) => this.goback(e)}
                    rightContent={<a style={{ fontSize: '16px' }} onTouchEnd={(e) => this.collate(e)}>排序</a> }
                ></NavBar>
        
                <ul className='collate' style={StyleObj}>
                    <li onTouchEnd={(e)=>this.focusCollate(e)}>按关注排序</li>
                    <li onTouchEnd={(e)=>this.pageCollate(e)}>按文章排序</li>
                </ul>

               
                <WhiteSpace></WhiteSpace>
                <span className='title'>温馨提示：第一个文集将作为你新建文章的默认文集</span>
                <WhiteSpace></WhiteSpace>
                <div className='newcollection'>
                    <Icon type='down'></Icon>
                    <span>新建文集</span>
                </div>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
              
                {this.create()}
               
               

            </div>
        )
    }
}