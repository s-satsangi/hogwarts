import React, { Component } from 'react'
const style1 = 'ui card'

export default class SinglePig extends Component {
    constructor(){
        super()
        this.props = {
            
            front: <h2 className='header'>{this.props.hog.name}</h2>,
            back:  <div className='body'>
                {this.props.hog.specialty}
                {this.props.hog.greased}
                {this.props.hog.weight}
                {this.props.hog['highest medal achieved']}
                
            </div>

        }
    }

    render() {
        return (
            <div onclick={this.state.hog.back} className=" ui move right reveal ui card ui eight wide column">
                {/* <div className='visible content'> */}
                <h2 className='header'>{this.props.hog.name}</h2>
                
                <div className='image' ><img src={require(`../hog-imgs/${this.props.hog.name.toLowerCase().replace(/\s/g,'_')}.jpg`)} alt="this is an alt prop"/></div>
                </div>
                
        )
    }
}

{/* <div class="ui move right reveal">
  <div class="visible content">
    <img src="/images/wireframe/square-image.png" class="ui small image">
  </div>
  <div class="hidden content">
    <img src="/images/avatar/large/jenny.jpg" class="ui small image">
  </div>
</div> */}
