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
  if(this.state.name&&this.state.score){
let newtable = this.state.table.filter((leader) => 
    leader.name !== this.state.name
   )
    this.setState(
      {
        table: [...newtable,
        {name: this.state.name,
        score: this.state.score}
        ]
      }
    )}    
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
  if(!isNaN(e.target.value))
  this.setState({
    ...this.state,score:e.target.value
  })
}

resetHandler = (e) =>{
  e.preventDefault()
  this.setState({
    table:[]
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
    <button onClick = {this.resetHandler.bind(this)}>reset</button>
   </form>
   <ol>
   {this.state.table.sort((a,b) => b.score - a.score).map((leader,index) => {
    return <Leader name={leader.name} score = {leader.score}></Leader>
     }
    )}
    </ol>
  </div>
 )}
}

export default App;
