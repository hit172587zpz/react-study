import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class CommentAdd extends Component {


    static propTypes={
        addComment:PropTypes.func.isRequired
    }
    state = {
        username: '',
        content: ''
    }
    handleSubmit = ()=>{
        //collect the information
        const comment = this.state
        this.props.addComment(comment)
        this.setState({username:'',content:''})
    }

    handleChange = (e)=>{
        //collect the information
        // const username=e.target.value
        // console.log(e.target.value)
        this.setState({username:e.target.value})
    }

    handleChange1 = (e)=>{
        //collect the information
        // const content = e.target.value

        this.setState({content:e.target.value})
    }
    render() {
        // const {username,content}=this.state
        return (
            <div className="col-md-4">
                <form  className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="">username</label>
                        <input type="text" className="form-control" placeholder="username" 
                        value={this.state.username} onChange={this.handleChange}/>
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="">評價内容</label>
                        <textarea  type="text" className="form-control"  row="12" placeholder="評價内容" value={this.state.content}
                        onChange={this.handleChange1}/>
                        
                    </div>

                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-primary pull-right" onClick={this.handleSubmit}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
