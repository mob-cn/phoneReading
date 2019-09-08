import React,{Component} from 'react'
import './AllFocus.less'
// 引入axios
import axios from 'axios';
export default class List1 extends Component{
    // 构造函数
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			data: []
		}
    }
    getData(){
        axios
            .get('/data/AllFocus.json')
            .then(({data}) => this.setState({ data:data.zhuanti}))
    }
    // 组件创建完成
	componentDidMount() {
		// 发送请求
		this.getData()
	}
    creat(){
        return this.state.data.map(
            (item) => {
                return(
                    <li key={item._id} className='coli'>
                        <img src={'../'+item.img} alt=""/>
                        <span className='title'>{item.name}</span>
                        <span className='zan'>{item.sloen}</span>
                        <span className='focus'>已关注</span>
                    </li>
                ) 
            }
        )
    }
    render(){
        return(
            <div className='List'>
                {this.creat()}
            </div>
        )
    }
}