import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Form from './form'
import DataForm from './formcopy'
export class App extends Component {
    state = {

    }
    
    render() {
        return (
            <div>
                <h1>STUDENT DETAILS Chart Box</h1>
              <Router>
                   {/* <Route exact path="/"  component={Form} /> */}
                   <Route exact path="/"  component={DataForm} />
                   
              </ Router>
            </div>
        )
    }
}

export default App

