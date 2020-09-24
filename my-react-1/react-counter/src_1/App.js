// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

import * as actions from './redux/actions'




export default class App extends Component {


  increment = ()=>{
    const number = this.select.value *1
    this.props.store.dispatch(actions.incrementCreator(number))
  }

  decrement = ()=>{
    const number=this.select.value*1
    this.props.store.dispatch(actions.decrementCreator(number))

  }



  render() {
    const count=this.props.store.getState()
    
    return (
      <div>
          <p> click {count} times</p>
          <div>
            <select ref={select=>this.select=select}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>&nbsp;
            <button onClick={this.increment}>+</button>
            &nbsp;
            <button onClick={this.decrement}>-</button>
            &nbsp;
            <button>odd add</button>
            &nbsp;
            <button>odd --</button>
            &nbsp;
          </div>
      </div>
    )
  }
}

// function App() {

//   const {count}=this.props.store.getState()

//   return (

    
//     <div>
//       <p> click {count} times</p>
//       <div>
//         <select>
//           <option value="1">1</option>
//           <option value="2">2</option>
//           <option value="3">3</option>
//         </select>&nbsp;
//         <button>+</button>
//         &nbsp;
//         <button>-</button>
//         &nbsp;
//         <button>odd add</button>
//         &nbsp;
//         <button>odd --</button>
//         &nbsp;
//       </div>

//     </div>
//   )
// }


