// 引入createStore
import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import reducer from '../reducer';
// 异步action
import reduxThunk from 'redux-thunk';
// export let store = createStore(reducer);

export let store = applyMiddleware(reduxThunk)(createStore)(reducer);


let mapStateToProps = state => ({ state });
let mapDispatchToprops = dispatch => ( { dispatch } );

export let dealFn = connect(mapStateToProps,mapDispatchToprops);