import React, { Component } from 'react'
const style1 = 'ui card'

export default class SinglePig extends Component {
    constructor(props){
        super()
        this.state = {
            
            front: <div className="pigTile ui card"><h2 className='header'>{props.hog.name}</h2> 
                    <div className='image' ><img className='image' src={require(`../hog-imgs/${props.hog.name.toLowerCase().replace(/\s/g,'_')}.jpg`)} alt="this is an alt prop"/></div></div>,
            cardBack:  <div className='body'>
                {props.hog.specialty}
                {props.hog.greased}
                {props.hog.weight}
                {props.hog['highest medal achieved']}
                
            </div>,
            flipped: false

        }
    }
    
    frontCard = () => 
          <div className="pigTile ui card"><h2 className='header'>{this.props.hog.name}</h2> 
                    <div className='image' ><img className='image' src={require(`../hog-imgs/${this.props.hog.name.toLowerCase().replace(/\s/g,'_')}.jpg`)} alt="this is an alt prop"/></div></div>
  
    
    backCard = () =>  <div className='pigTile ui card'>
       <div className="header"> {this.props.hog.specialty}</div>
       <div className="header"> {this.props.hog.greased}</div>
       <div className="header"> {this.props.hog.weight}</div>
       <div className="header"> {this.props.hog['highest medal achieved']}
        </div>
    </div> 
    
    render() {
        let inCard = this.state.front
        return (
            <div onClick={()=>{return this.setState({flipped: !this.state.flipped})}} className="ui eight wide column">
                {this.state.flipped ? this.backCard() : this.frontCard()}               
                </div>
                
        )
    }
}

<div className = "pigTile ui eight wide column ui card"></div>