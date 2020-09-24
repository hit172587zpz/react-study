import React, { Component } from "react";
import CommentAdd from '../comment-add/comment-add';
import CommentList from '../comment-list/comment-list';

export default class App extends Component {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         comment: [
    //             {username:'Tom',content:'React is very good'},

    //             {username:'jack', content:"react is very bad"},
    //         ]
    //     }
        
    // }
    state={
        // comments: [
        //     {username:'Tom',content:'React is very good'},

        //     {username:'jack', content:"react is very bad"},
        // ]
        comments:[]
    }

    componentDidMount(){
        setTimeout(()=>{
            const comments =  [
                            {username:'Tom',content:'React is very good'},
            
                            {username:'jack', content:"react is very bad"},
                        ]
                        this.setState({comments})
        },2000)
    }


    addComment=(comment)=>{
        const {comments} = this.state
        comments.unshift(comment)

        this.setState({comment})

    }

    deleteComment=(index)=>{
        const {comments} = this.state
        comments.splice(index,1)

        this.setState({comments})


    }

    render() {
        const {comments}=this.state
        
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="container">
                    <div className="row">
                        <CommentAdd addComment={this.addComment}/>
                        <CommentList comments={comments} deleteComment={this.deleteComment}/>
                    </div>            
                </div>
            </div>
        )
    }
}


