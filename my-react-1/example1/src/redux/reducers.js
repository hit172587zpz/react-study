import {ADD_COMMNET,DELETE_COMMENT,RECEIVE_COMMENTS} from './action-type'

// const initComments = [
  
//             {username:'Tom',content:'React is very good'},

//             {username:'jack', content:"react is very bad"}
// ]
const initComments=[]
export function commnets(state=initComments,action){
    switch (action.type){
        case ADD_COMMNET:
            return [action.data,...state]
        case DELETE_COMMENT:
            return state.filter((commnet,index)=>index!==action.data)
        case RECEIVE_COMMENTS:
            return action.data
        default:
            return state
    }
}