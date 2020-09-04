import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';

export default class Main extends Component {


    static propsTypes = {
        searchName:PropTypes.string.isRequired
    }
    state = {
        initView: true,
        loading: false,
        users:null,
        errorMsg:null
    }

    componentWillReceiveProps(newprops){
        const {searchName}=newprops

        this.setState({
            initView:false,
            loading:true,
        })
        const url=`https://api.github.com/search/users?q=${searchName}`
        axios.get(url)
            .then(response=>{
                const result = response.data
                console.log(result)
                const users=result.items.map((item)=>({name:item.login, url:item.html_url, avataurl:item.avatar_url}))
                this.setState({loading:false,users:users})
            })

            .catch(error=>{
                this.setState({loading:false,errorMsg:error.message})
            })

    }

    render() {
        const {initView,loading,users,errorMsg}=this.state

        if (initView){
            return <h2>Please enter keywords to search</h2>
        } 
        else if(loading){
            return <h2>Loading...</h2>
        }
        else if(errorMsg){
            return <h2>{errorMsg}</h2>
        }
        else{
            return (
            <div className="row">
                {
                    users.map((user,index)=>(
                    <div className="card" key={index}>
                        <a href={user.url} target="_blank">
                            <img src={user.avataurl} style={{width: 100}}/>
                        </a>
                        <p className="card-text">{user.name}</p>
                    </div>
                    
                    )

                    )
                }
            </div>
        )
        }

        
    }
}
