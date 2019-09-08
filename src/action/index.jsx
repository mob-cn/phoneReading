// 引入axios
import axios from 'axios';

import {Find_Coll} from '../consts'

export let findcoll = data => ({data,type:Find_Coll})
// 普通的写  export let findcoll = {data,type:Find_Coll}

export let find = () =>
    dispatch => {
        axios
            .get('/data/MyCollection.json')
            .then(({data}) => {
                console.log('66');
                return dispatch(findcoll(data.data))
            })
    }