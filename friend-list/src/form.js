import React, { Component } from 'react'
import axios from 'axios';
// const names = ['James', 'John', 'Paul', 'Ringo', 'George'];
export class form extends Component {
    constructor(props){
        super(props);
        this.state={
            value: undefined,
            roll_no:undefined,
            name:undefined,
            Details:undefined,
            RollNo: undefined,
            Name:undefined,
            DETAILS:undefined,
            dash:undefined

        }
    }
    clickedButton = (event) =>{
        event.preventDefault(); 
        console.log('roll_no.',this.state.id)
        const data ={
            id:this.state.id
            // name: 'Vijay'
        };
        console.log('DESERT',this.state.value)
        
        axios.post(`http://localhost:7000/api`,data)
        .then(res=>{
            // console.log('response',res)
            const api_Data = res.data[0]
            // console.log('data',api_Data)
            // this.props.history.push('/api/'+this.state.id)
            // console.log('BIHAR',api_Data.roll_no)
            this.setState({
                RollNo:'Roll_No',
                Name:'Name',
                DETAILS:'Details',
                roll_no: api_Data.roll_no,
                name: api_Data.name,
                Details: api_Data.details,
                dash:'-'
            })
        }
        
        )
        .catch(error=>{
             console.log('ERROR')
        }          
        )
        console.log('AKCDR',this.state.name)
        // this.setState({
        //     roll_no:undefined
        // })
        // console.log('tyuio')
    }
    // console.log('tamacahaj')
    handleChange = event => {
        this.setState({
          value: event.target.value
        });
    
      }
    render() {
        //  console.log('check3',this.state.roll_no)
        return (
            <div>
                 <form>
                  <label >
                   Name:  <input type='text' value= {this.state.id}  onChange = {this.handleChange} id= 'id' /><br></br>
                   {/* <select value={this.state.value} onChange={this.handleChange}>
                             <option value="ram">Ram</option>
                             <option value="lime">Lime</option>
                             <option value="coconut">Coconut</option>
                             <option value="mango">Mango</option>
                    </select><br></br> */}
                   DATA: <button type= 'submit' onClick = {this.clickedButton}>get data</button><br></br>
                    <label>
                        <h2>{this.state.RollNo}  {this.state.dash}  {this.state.roll_no}</h2>
                         <h2>{this.state.Name}   {this.state.dash}    {this.state.name}</h2>
                            <h2>{this.state.DETAILS}  {this.state.dash}  {this.state.Details}</h2>
                          {/* <h1>lalantop</h1> */}
                          
                    </label>
                  </label>
                </form>
            </div>
        )
    }
}

export default form;

