/*
    包含多个reducer函数的模块
*/
import {INCREMENT,DECREMENT} from './action-typr'


export function counter(state=1,action){
    console.log('counter()',state,action)


    switch (action.type){
        case INCREMENT:
            return state+action.data
        case DECREMENT:
            return state-action.data
        default:
            return state
        
    }

}