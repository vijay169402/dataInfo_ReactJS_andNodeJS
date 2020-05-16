import React, { Component } from 'react'
import axios from 'axios';
export class data_form extends Component {
    constructor(props){
        super(props)
        // console.log('don',this.props)
        this.state = {
          id : this.props.match.params.id
        }
        // console.log('don',this.state.id)
        
      }
      componentWillMount(){
          this.fetchDataApi()
      }
      
      fetchDataApi=()=>{
        const id = this.state.id
        console.log('vijay',this.state.id)
        axios.post(`http://localhost:7000/api`,id)
        .then(res=>{
            // console.log('response',res)
            console.log('OUTPUT',res)
            // const api_Data = res.data[0]
            // console.log('data3',api_Data)
            // this.props.history.push('/api/'+res.data[0].roll_no)
        }
        )
        .catch(error=>{
             console.log('errorcvbn')
        }          
        )
        // console.log('fgh')
      }
    //   console.log('fgh')
    render() {
        return (
            <div>
                <h1>How r u</h1>
               <h1> {this.state.id}</h1>
            </div>
        )
    }
}

export default data_form
