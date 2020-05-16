import React, { Component } from 'react'
//  ReactDOM from "react-dom";
import axios from 'axios';

export class formcopy extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        value: "coconut",
        roll_no:undefined,
        name:undefined,
        Details:undefined,
        RollNo: undefined,
        Name:undefined,
        DETAILS:undefined,
        dash:undefined
 };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   handleChange(event) {
  //     this.setState({ value: event.target.value });
  //   }

  handleSubmit(event) {
      console.log('fruit',this.state.value)
    // alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
    const data ={
        id:this.state.value
    };
    axios.post(`http://localhost:7000/api`,data)
    .then(res=>{
        console.log('response',res)
        const api_Data = res.data[0]

        this.setState({
            RollNo:'Roll_No',
            Name:'Name',
            DETAILS:'Details',
            roll_no: api_Data.roll_no,
            name: api_Data.name,
            Details: api_Data.details,
            dash:'-'
        })
        console.log(this.state.Details)
    })
    .catch(error=>{
        console.log('error')
    })
    
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite Student:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="RAM">Ram</option>
            <option value="Shyam">Shyam</option>
            <option value="MOHAN">Mohan</option>
            <option value="Sohan">Sohan</option>
            <option value="sunil">Sunil</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
        
        <label>
            <h2>{this.state.RollNo}  {this.state.dash}  {this.state.roll_no}</h2>
            <h2>{this.state.Name}   {this.state.dash}    {this.state.name}</h2>
            <h2>{this.state.DETAILS}  {this.state.dash}  {this.state.Details}</h2>          
        </label>
      </form>
    );
  }
}

export default formcopy;