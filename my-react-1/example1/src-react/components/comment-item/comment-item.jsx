import React, { Component } from 'react'
import  PropTypes from 'prop-types'

export default class CommentItem extends Component {

    static propTypes={
        comment:PropTypes.object.isRequired,
        deleteComment:PropTypes.func.isRequired,
        index:PropTypes.number.isRequired
    }
    
    delComment = ()=>{
        const {comment,index,deleteComment}=this.props
        if(window.confirm("if sure delete it")){
            deleteComment(index)
        }
        // deleteComment(index)
    }


    render() {
        const {comment}=this.props

        return (
        <li className="list-group-item">
            <div className="handle">
                <a href="#" onClick={this.delComment}>删除</a>

            </div>
            <p className="user"><span>{comment.username}</span><span>说：</span></p>
            <p className="centence">{comment.content}</p>
        </li>
        )
    }
}
