import React, { Component } from 'react'

export default class SinglePig extends Component {
    render() {
        return (
            <div className="pigTile ui eight wide column">
                {this.props.hog.name}
                <img src={require(`../hog-imgs/${this.props.hog.name.toLowerCase().replace(/\s/g,'_')}.jpg`)} alt="this is an alt prop"/>
            </div>
        )
    }
}
