import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Search extends Component {

    static propsTypes = {
        setSearchName:PropTypes.func.isRequired
    }
    search = ()=>{
        const searchName = this.input.value.trim()
        if (searchName){
            this.props.setSearchName(searchName)
        }
    }
    render() {
        return (
        <section className="jumbotron">
            <h3 className="jumbotron-heading">Seach Github User</h3>
            <div>
                <input type="text" placeholder="enter the name you search" ref={input=>this.input=input}/>
                <button onClick={this.search}>Search</button>
            </div>
        </section>
        )
    }
}
