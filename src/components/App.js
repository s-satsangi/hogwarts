import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
// import HelloWorld from "./HelloWorld";
// import PigPen from "./PigPen"
import SinglePig from "./SinglePig"


class App extends Component {
  
  
  
  //stick them pigs in state
  constructor(){
    super()
    this.state = {
      pigs: hogs
    }
  }
  alphaPig = () => {
 
    this.setState({pigs: this.state.pigs.sort((a,b)=>{ return a["name"].localeCompare(b["name"])})})
    console.log(hogs.sort((a,b)=>{ return a["name"].localeCompare(b["name"])}))
    
        
  }
  weighPig = () => {
    console.log("Wheeeight")
    this.setState({pigs: this.state.pigs.sort((a,b)=>{ return a["weight"] - b["weight"]})})
    console.log(hogs.sort((a,b)=>{ return a["weight"] - (b["weight"])}))
  }
  filterPig = () => {
    console.log("filterin")
    this.setState({pigs: this.state.pigs.filter(hog => hog.greased)})
    console.log(hogs.filter(hog => hog.greased))
  }

  render() {
    return (
      <div className="App ui grid container ui eight wide column">
        <Nav />
        <span>
        <div className="ui eight wide column">
        <button onClick={this.alphaPig}>Sort By Name</button>
        <button onClick={this.weighPig}>Sort By Weight</button>
        <button onClick={this.filterPig}>Filter Pigs</button>
        </div>
        </span>
        {this.state.pigs.map(hog => <SinglePig hog={hog} />)}
        
      </div>
    );
  }
}
export default App;
