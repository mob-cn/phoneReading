
import {Find_Coll} from '../consts'
// 默认状态数据
let defaultState = { data:[] };

export default function reducer(state = defaultState ,action){
     let result = {};
    if(action.type === Find_Coll){
        result.data = action.data;
        // console.log(result, 111);
    }
    //合并集合
    return Object.assign({}, state, result)
    // return state
}

//普通写法
import {Find_Coll} from '../consts'
export default function reducer(state ,action){
     let result = {};
    if(action.type === Find_Coll){
        state.data = action.data;
        // console.log(result, 111);
    }
    return state
}


