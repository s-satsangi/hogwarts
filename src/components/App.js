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
    let pigs = hogs
    hogs.sort(hogs.name)
    console.log(hogs.sort(hogs.name))
  }
  render() {
    return (
      <div className="App ui grid container ui eight wide column">
        <Nav />
        
        <button onClick={this.alphaPig}>Sort By Name</button>
        {hogs.map(hog => <SinglePig hog={hog} />)}
        
      </div>
    );
  }
}
export default App;
