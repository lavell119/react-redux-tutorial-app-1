import Ninjas from './Ninjas'
import React, { Component } from 'react' 
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
    { name: 'Ryu', age: 30, belt: 'black', id: 1 },
    { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
    { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
  ]
}
//Add Ninja function
  addNinja = (ninja) => {
    ninja.id = Math.random()
    //Always set state inside of 'setState'
    let ninjas =  [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas: ninjas
    })
  }
  render() {
  return (
    <div className="App">
      <h1>My App</h1>
      <p>Welcome</p>
      <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>  
      <AddNinja addNinja = {this.addNinja}/>   
    </div>
  )
}

}

export default App;
