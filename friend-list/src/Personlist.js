import React, { Component } from 'react'

export class Personlist extends Component {
    
    state = {
        const people = [
          {
            img: 22,      
            name: 'john', 
            job: 'developer'
          },
          {
            img: 34,
            name: 'bob',
            job: 'designer'
          },
          {
            img: 56, 
            name: 'john', 
            job: 'ARTIst'
          }
        ];
    }
        
      
    render() {
        return (<section>
          <Person person={people[0]} />
          <Person person={people[1]}/>
          <Person person={people[2]}/>
        </section>);
    }
}

export default Personlist
