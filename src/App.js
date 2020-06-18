import React,{Component} from 'react';
import './App.css';
import Leader from './Leader/Leader.js'

class  App extends Component{
constructor(){
  super()
  this.state = {
    name:"",
    score:"",
    table:[]
  }
}
addHandler = (e) =>{
  e.preventDefault()
  if(this.state.name&&this.state.score)
    this.setState(
      {
        table: [...this.state.table,
        {name: this.state.name,
        score: this.state.score}
        ]
      }
    )    
}
nameHandler = (e) =>{
  e.preventDefault()
  this.setState(
    {
      ...this.state,name:e.target.value
    })
}
scoreHandler = (e) =>{
  e.preventDefault()
  this.setState({
    ...this.state,score:e.target.value
  })
}
render(){
 return (
  <div>
    <p>Leaderboard</p>
   <form>
    <input onChange = {this.nameHandler} placeholder = "name" ></input>
    <input onChange = {this.scoreHandler} placeholder = "score" ></input>
    <button onClick = {this.addHandler.bind(this)}>submit</button>
   </form>
   <ol>
   {this.state.table.sort((a,b) => a.score - b.score).map((leader,index) => {
    return <Leader name={leader.name} score = {leader.score}></Leader>
     }
    )}
    </ol>
  </div>
 )}
}

export default App;
