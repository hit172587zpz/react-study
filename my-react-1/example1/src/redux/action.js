
import {ADD_COMMNET,DELETE_COMMENT,RECEIVE_COMMENTS} from './action-type'


export const addComment = (comment) => ({type:ADD_COMMNET,data:comment})
export const deleteComment = (index) => ({type:DELETE_COMMENT,data:index})

export const receiveComments = (commnets)=>({type:RECEIVE_COMMENTS,data:commnets})

export const getComments =()=>{
    return dispatch=>{
        setTimeout(()=>{
            const comments= [
                {username:'Tom',content:'React is very good'},

                {username:'jack', content:"react is very bad"}
            ]
            dispatch(receiveComments(comments))

        },2000)
    }
}
